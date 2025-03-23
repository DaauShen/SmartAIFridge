require('dotenv').config(); // Load .env file

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use PORT from .env

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
