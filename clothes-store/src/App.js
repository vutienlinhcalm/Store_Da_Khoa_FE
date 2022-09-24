import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import BlogPage from "./pages/blog/BlogPage";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
