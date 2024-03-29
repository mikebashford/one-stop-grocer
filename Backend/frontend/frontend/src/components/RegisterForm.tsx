import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg ">
      <form className="bg-green-700 shadow-md rounded-3xl p-12 mt-8" action="">
        <div className="flex flex-col mb-8">
          <label
            className="flex justify-center text-white text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="flex justify-center text-black text-md font-bold mb-2 rounded-xl p-2"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label
            className="flex justify-center text-white text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="flex justify-center text-black text-md font-bold mb-2 rounded-xl p-2"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
