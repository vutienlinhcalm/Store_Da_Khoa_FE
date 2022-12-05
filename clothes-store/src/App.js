import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/home/HomePage";
import CategoryIndex from "./pages/categories/CategoryIndex";
import AboutPage from "./pages/about/AboutPage";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import CheckOut from "./pages/checkout/CheckOut";
function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/category/*" element={<CategoryIndex />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
