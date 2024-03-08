import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm.tsx";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch("/session/", {
          credentials: "same-origin",
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    getSession();
  }, []);

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

  const isResponseOk = (event) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": cookies.get("csrftoken"),
        },
        credentials: "same-origin",
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await isResponseOk(response);
      console.log(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid Credentials");
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/logout/", {
        credentials: "same-origin",
      });
      const data = await isResponseOk(response);
      console.log(data);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-48">
        <p className="text-3xl">One Stop Grocer</p>
      </div>
      <div className="flex justify-center">
        <LoginForm
          login={login}
          logout={logout}
          error={error}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
}
