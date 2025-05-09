import React from "react";
import NavbarPage from "./Components/Navbar/NavbarPage";
import { Route, Routes, useLocation } from "react-router-dom";
import HomepageConnected from "./Components/HomepageConnected/HomepageConnected";
import Footerdiv from "./Components/Footer/Footerdiv";
import ShopComponentConnected from "./Components/ShopComponent/ShopComponentConnected/ShopComponentConnected";
import ContactpageConnected from "./Components/ContactpageConnected/ContactpageConnected";
import CategoryContextprovider from "./Components/Contexts/CatergoryContext/CategoryContextprovider";
import LoginComponentConnected from "./Components/LoginComponent/LoginComponentConnected/LoginComponentConnected";
import CartContext from "./Components/Contexts/CartContext/CartContext";
import CartContextprovider from "./Components/Contexts/CartContext/CartContextprovider";
import CartPage from "./Components/CartPage/CartPage/CartPage";
import CartConnected from "./Components/CartPage/CartConnected/CartConnected";
import BlogConnected from "./Components/BlogConnected/BlogConnected";
import ShopContextprovider from "./Components/Contexts/ShopContext/ShopContextprovider";
import ProductDetails from "./Components/ShopComponent/ProductDetails/ProductDetails";

function App() {
  const location = useLocation();
  console.log("location", location);

  const isLogin = location.pathname === "/Login";
  return (
    <>
    <ShopContextprovider>
      <CartContextprovider>
        {isLogin ? "" : <NavbarPage />}
        <CategoryContextprovider>
          <Routes>
            <Route path="/" element={<HomepageConnected />}></Route>
            <Route path="/shop" element={<ShopComponentConnected />}></Route>
            <Route path="/blog" element={<BlogConnected />}></Route>
            <Route path="/contact" element={<ContactpageConnected />}></Route>
            <Route path="/Login" element={<LoginComponentConnected />}></Route>
            <Route path="/cartpage" element={<CartConnected />}></Route>
            <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
          </Routes>
        </CategoryContextprovider>
        {isLogin ? "" : <Footerdiv />}
      </CartContextprovider>
      </ShopContextprovider>
    </>
  );
}

export default App;
