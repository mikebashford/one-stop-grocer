import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Cookies from "universal-cookie";

interface LoginProps {
  error: string;
  setError: (error: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  cookies: Cookies;
}
export default function Login({
  isAuthenticated,
  setIsAuthenticated,
  error,
  cookies,
  setError,
}: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event: React.FormEvent) => {
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
      const data = await response.json();
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
      const data = await response.json();
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
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </div>
    </div>
  );
}
