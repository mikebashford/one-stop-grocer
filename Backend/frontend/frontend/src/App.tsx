import "vite/modulepreload-polyfill";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./utils/shoppingCart";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState("");

  const getSession = async () => {
    try {
      const response = await fetch("/session/", {
        credentials: "same-origin",
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      // Check for empty response before parsing JSON
      if (response.status === 204 || response.statusText === "No Content") {
        setIsAuthenticated(false); // Set authentication state to false for empty response
        return;
      }

      const data = await response.json();
      console.log(data);
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      console.log("Error fetching session:", error);
    }
  };

  const whoami = async () => {
    try {
      const response = await fetch("/whoami/", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={
              <Login
                error={error}
                setError={setError}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                cookies={cookies}
              />
            }
            path="/login"
          />

          <Route element={<Register />} path="/register" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
