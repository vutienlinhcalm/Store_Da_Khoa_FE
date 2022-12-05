import ProductPage from './features/product/ProductPage'
import OrderPage from './features/order/OrderPage'
// import { Route, Outlet, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Routes>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/orders" element={<OrderPage />}></Route>
        <Route path="/*" element={<Navigate to="/products" replace />} />
      </Routes>
      <Outlet /> */}
    </div>
  );
}

export default App;
