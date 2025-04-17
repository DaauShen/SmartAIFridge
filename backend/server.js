require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const Image = require("./models/Image");
const Count = require("./models/Count");
const FridgeStats = require("./models/FridgeStats");

const app = express();
app.use(cors());
app.use(express.json());

const { THINGSBOARD_HOST, ACCESS_TOKEN, PORT, MONGO_URI } = process.env;

const IMAGE_URL = `http://${THINGSBOARD_HOST}/api/v1/${ACCESS_TOKEN}/attributes?clientKeys=image`;
const ATTRIBUTES_URL = `http://${THINGSBOARD_HOST}/api/v1/${ACCESS_TOKEN}/attributes?clientKeys=object_counts,temperature,humidity`;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => console.log("✅ MongoDB connected"));

async function fetchAndSaveData() {
  try {
    const [imageRes, attrRes] = await Promise.all([
      axios.get(IMAGE_URL),
      axios.get(ATTRIBUTES_URL),
    ]);

    const imgBase64 = imageRes.data?.client?.image;
    if (imgBase64) {
      await Image.deleteMany({});
      await Image.create({ base64: imgBase64 });
    }

    const clientData = attrRes.data?.client || {};
    if (clientData.object_counts != null && typeof clientData.object_counts === "object") {
      await Count.create({ values: clientData.object_counts });
    }
    

    if (clientData.temperature != null && clientData.humidity != null) {
      await FridgeStats.create({
        temperature: clientData.temperature,
        humidity: clientData.humidity,
      });
    }

    console.log("✅ Dữ liệu đã lưu vào MongoDB");
  } catch (err) {
    console.error("❌ Lỗi fetch/lưu:", err.message);
  }
}

fetchAndSaveData();
setInterval(fetchAndSaveData, 5000);

app.get("/api/images", async (req, res) => {
  const img = await Image.findOne().sort({ timestamp: -1 });
  res.json(img);
});

app.get("/api/counts", async (req, res) => {
  const count = await Count.findOne().sort({ timestamp: -1 });
  res.json(count);
});


app.get("/api/fridge", async (req, res) => {
  const fridge = await FridgeStats.findOne().sort({ timestamp: -1 });
  res.json(fridge);
});

app.get("/api/fridge/history", async (req, res) => {
  const data = await FridgeStats.find().sort({ timestamp: 1 }).limit(10);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend chạy tại http://localhost:${PORT}`);
});

const User = require("./models/User");

// ĐĂNG KÝ NGƯỜI DÙNG
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Thiếu username hoặc password" });

  const existingUser = await User.findOne({ username });
  if (existingUser)
    return res.status(409).json({ message: "Username đã tồn tại" });

  const newUser = new User({ username, password });
  await newUser.save();

  res.status(201).json({ message: "Đăng ký thành công" });
});

// ĐĂNG NHẬP NGƯỜI DÙNG
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user)
    return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });

  res.json({ message: "Đăng nhập thành công", user });
});