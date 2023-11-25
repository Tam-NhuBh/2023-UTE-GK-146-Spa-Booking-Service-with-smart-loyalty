import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Booking from "./pages/Booking";
import Introduce from "./pages/Introduce";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import ShopLayout from "./layouts/ShopLayout";
import ProductDetail from "./components/Product/ProductDetail";
import { Toaster } from "react-hot-toast";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={<MainLayout />}>
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
