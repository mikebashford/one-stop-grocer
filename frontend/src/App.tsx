import { useState } from "react";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Cart from "./pages/Cart.tsx";
import Login from "./pages/Login.tsx";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./utils/shoppingCart.tsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const onUpdate = () => {
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/users");
    const data = await res.json();
    setCurrentUser(data.users);
    console.log(data.users);
  };

  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route
            element={
              <Home existingUser={currentUser} updateCallback={onUpdate} />
            }
            path="/"
          />
          <Route
            element={
              <Login existingUser={currentUser} updateCallback={onUpdate} />
            }
            path="/login"
          />

          <Route
            element={
              <Register existingUser={currentUser} updateCallback={onUpdate} />
            }
            path="/register"
          />
          <Route
            element={
              <Cart existingUser={currentUser} updateCallback={onUpdate} />
            }
            path="/cart"
          />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
