import { Route, Routes } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import Information from "./pages/Information";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";
import { SearchProvider } from "./components/Shop/SearchContext.jsx"; // Import the SearchProvider

function App() {
  return (
    <SearchProvider> {/* Wrap the entire app with the SearchProvider */}
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
    </SearchProvider>
  );
}

export default App;