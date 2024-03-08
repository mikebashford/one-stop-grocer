import React from "react";
import { useState } from "react";
export default function LoginForm({ existingUser = {}, updateCallback }) {
  const [email, setEmail] = useState(existingUser.email || "");
  const [password, setPassword] = useState(existingUser.password || "");
  return (
    <div className="w-full max-w-lg">
      <form className="bg-green-700 shadow-md rounded-3xl p-12 mt-8" action="">
        <div className="flex flex-col mb-8">
          <label
            className="flex justify-center text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="flex justify-center text-black text-md font-bold mb-2 rounded-xl p-2"
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="flex justify-center text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="flex justify-center text-black text-md font-bold mb-2 rounded-xl p-2"
            type="text"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="flex justify-center w-1/3 bg-white text-green-700 text-md font-bold mb-2 rounded-xl p-2 border-white border-2 hover:bg-green-700 hover:text-white"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
