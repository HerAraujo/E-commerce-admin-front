import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import NewCategory from "./pages/Categories/NewCategory";
import EditCategory from "./pages/Categories/EditCategory";
import ProductCreateFrom from "./pages/ProductCreateForm/ProductCreateFrom";
import ProductEditFrom from "./pages/ProductEditForm/ProductEditForm";
import Admins from "./pages/Admins/Admins";
import NewAdmin from "./pages/Admins/NewAdmin";
import UpdateAdmin from "./pages/Admins/UpdateAdmin";
import Images from "./pages/Images/Images";
import ImageUploadForm from "./pages/ImageUploadForm/ImageUploadForm";
import ProductImages from "./pages/ProductImages/ProductImages";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo-orders" element={<Orders />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/newAdmin" element={<NewAdmin />} />
        <Route path="/edit-admin/:id" element={<UpdateAdmin />} />
        <Route path="/demo-logged" element={<Orders />} />
        <Route path="/images" element={<Images />} />
        <Route path="/upload-image" element={<ImageUploadForm />} />
        <Route path="/edit-product-images/:id" element={<ProductImages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/newCategory" element={<NewCategory />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/create-product" element={<ProductCreateFrom />} />
        <Route path="/edit-product/:id" element={<ProductEditFrom />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
