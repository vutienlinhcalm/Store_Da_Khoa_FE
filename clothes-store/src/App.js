import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import BlogPage from "./pages/blog/BlogPage";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/home/HomePage";
import CategoryIndex from "./pages/categories/CategoryIndex";
import AboutPage from "./pages/about/AboutPage";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/category/*" element={<CategoryIndex />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
