import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Booking from './pages/Booking'
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound"
import ShopLayout from "./layouts/ShopLayout";
import ProductDetail from "./components/Product/ProductDetail";
import { Toaster } from "react-hot-toast";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";
import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token'))
    ?.split('=')[1];
  console.log("Token: ", token);
  if (!token) {
    console.log('No token found, redirecting to login');
    return <Navigate to="/login" />;
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
  } catch (error) {
    console.error('Error decoding JWT:', error);
    console.log('Error decoding JWT, redirecting to login');
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
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
            </AdminRoute>}
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
            <RootLayout>
              <Service />
            </RootLayout>
          }
        />
        <Route
          path="/introduce"
          element={
            <RootLayout>
              <Introduce />
            </RootLayout>
          }
        />
        <Route
          path="/information"
          element={
            <RootLayout>
              <Information />
            </RootLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <RootLayout>
              <Contact />
            </RootLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <RootLayout>
              <Cart />
            </RootLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <RootLayout>
              <Booking />
            </RootLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/shop">
          <Route
            index
            element={
              <RootLayout>
                <ShopLayout>
                  <Shop />
                </ShopLayout>
              </RootLayout>
            }
          />
          <Route
            path=":id"
            element={
              <RootLayout>
                <ShopLayout>
                  <ProductDetail />
                </ShopLayout>
              </RootLayout>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
