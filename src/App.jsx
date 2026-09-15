import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/useAuth.jsx";
import { ThemeProvider } from "./theme/ThemeContext.jsx";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Menu from "./Menu.jsx";
import DishDetail from "./DishDetail.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx";
import RequireAuth from "./RequireAuth.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menu/:id" element={<DishDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;