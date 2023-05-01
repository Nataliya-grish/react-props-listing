import Listing from "./components/Listing";
import "./App.css";
import etsy from "./data/etsy.json";

function App() {
  return <Listing items={etsy} />;
}

export default App;