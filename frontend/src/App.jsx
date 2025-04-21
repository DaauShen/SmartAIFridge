import ImageDisplay from "./components/ImageDisplay";
import CountCard from "./components/CountCard";
import LineChart from "./components/LineChart";
import FridgeStats from "./components/FridgeStats";

function App() {
  return (
    <div className="p-4 space-y-6">
      <ImageDisplay />
      <CountCard />
      <FridgeStats />
      <LineChart />
    </div>
  );
}

export default App;
