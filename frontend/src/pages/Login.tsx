import React from "react";
import LoginForm from "../components/LoginForm.tsx";

export default function Login() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-48">
        <p className="text-3xl">One Stop Grocer</p>
      </div>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
