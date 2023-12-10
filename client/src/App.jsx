import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { jwtDecode } from 'jwt-decode';
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Booking from './pages/Booking'
import Cart from "./pages/Cart";
import ShopLayout from "./layouts/ShopLayout";
import ProductDetail from "./components/Product/ProductDetail";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";
import { Provider } from 'react-redux';
import store from './redux/store/cart';
import NotFound from "./pages/NotFound"

const AdminRoute = ({ children }) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token'))
    ?.split('=')[1];
  console.log("Token: ", token);
  if (!token) {
    console.log('No token found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log('Decoded Token:', decodedToken);

    if (decodedToken.idRole === 1) {
      return children;
    } else {
      console.log('User is not an admin, redirecting to 404 page');
      return <Navigate to="/*" replace />;
    }
    console.error('Error decoding JWT:', error);
  } catch (error) {
    console.log('Error decoding JWT, redirecting to login');
    return <Navigate to="/login" replace />;
  }
};

function App() {
  // Store the current path before redirecting
  const location = useLocation();
  const [isBrowserBack, setIsBrowserBack] = useState(false);

  const storeRedirectPath = () => {
    const excludedPaths = ["/admin", "/login", "/register", "/*"];
    const currentPath = location.pathname;

    // Check if the current path is not in the excluded paths
    if (!excludedPaths.includes(currentPath)) {
      // Store the current path in localStorage
      localStorage.setItem('redirectPath', currentPath);
    }
  };

  // Store the current path when the component mounts
  useEffect(() => {
    if (isBrowserBack) {
      setIsBrowserBack(false);
    } else {
      storeRedirectPath();
    }
  }, [location.pathname, isBrowserBack]);

  // Handle the popstate event to detect browser back actions
  useEffect(() => {
    const handlePopState = () => {
      setIsBrowserBack(true);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/*"
          element={
            <NotFound />
          }
        >
        </Route>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <MainLayout />
            </AdminRoute>
          }
        >
          {routes}
        </Route>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/service"
          element={
            < RootLayout >
              <Service />
            </RootLayout>
          }
        />
        <Route
          path="/introduce"
          element={
            < RootLayout >
              <Introduce />
            </RootLayout>
          }
        />
        < Route
          path="/information"
          element={
            < RootLayout >
              <Information />
            </RootLayout >
          }
        />
        < Route
          path="/contact"
          element={
            < RootLayout >
              <Contact />
            </RootLayout >
          }
        />
        < Route
          path="/cart"
          element={
            < RootLayout >
              <Cart />
            </RootLayout >
          }
        />
        < Route
          path="/booking"
          element={
            < RootLayout >
              <Booking />
            </RootLayout >
          }
        />
        < Route path="/register" element={< Register />} />
        < Route path="/login" element={< Login />} />

        < Route
          path="/shop"
          index
          element={
            < RootLayout >
              <ShopLayout>
                <Shop />
              </ShopLayout>
            </RootLayout >
          }
        />
        < Route
          path="/shop/:id"
          element={
            < RootLayout >
              <ShopLayout>
                <ProductDetail />
              </ShopLayout>
            </RootLayout >
          }
        />
      </Routes >
      <Toaster />
    </Provider >
  );
}

export default App;
