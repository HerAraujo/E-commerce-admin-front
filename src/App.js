import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      {/* sidebar luego de login, mostrar sólo cuando esté logueado (similar a shop) */}
      <Sidebar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo-logged" element={<Sidebar />} />
        <Route path="/demo-logged" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
