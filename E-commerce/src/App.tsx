import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ShopPage } from "./pages/shop/ShopPage";
import { CartPage } from "./pages/cart/CartPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { ThanksPage } from "./pages/checkout/ThanksPage";
import { LoginPage } from "./pages/login/LoginPage";
import { CMSPage } from "./cms/CMSPage";
import { CMSProductsPage } from "./cms/orders/products/CMSProductsPage";
import { CMSOrdersPage } from "./cms/orders/CMSOrdersPage";
import { Navbar } from "./shared/components/core/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route index element={<Navigate to="products" />} />
          </Route>
          2
          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
