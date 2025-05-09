import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import ThemeProvider from "./contex/ThemeProvider";
import CartPage from "./components/cartPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import PaymentPage from "./components/PaymentPage";

// Helper component to handle layout logic
const AppLayout = () => {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
