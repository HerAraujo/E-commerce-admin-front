import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Grid from "./components/Sidebar/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo-logged" element={<Sidebar />} />
        <Route path="/demo-logged" element={<Orders />} />
        <Route path="/demo-grid" element={<Grid />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
