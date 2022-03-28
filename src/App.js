import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products/Products";
import ProductForm from "./pages/ProductForm/ProductFrom";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <div className="App">
      {/* sidebar luego de login, mostrar sólo cuando esté logueado (similar a shop) */}
      <Sidebar />

      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/demo-orders" element={<Orders />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/category" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
