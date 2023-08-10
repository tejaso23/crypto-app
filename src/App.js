
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/exchanges" element={<Exchange></Exchange>}></Route>
        <Route path="/coins/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        
      </Routes>
     
    </Router>
  );
}

export default App;
