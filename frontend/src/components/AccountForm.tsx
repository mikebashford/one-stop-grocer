import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountForm = ({ existingUser = {}, updateCallback }: Props) => {
  const [firstName, setFirstName] = useState(existingUser.firstName || "");
  const [lastName, setLastName] = useState(existingUser.lastName || "");
  const [email, setEmail] = useState(existingUser.email || "");
  const [password, setPassword] = useState(existingUser.password || "");
  const [role, setRole] = useState(existingUser.role || "user");

  const updating = Object.entries(existingUser).length !== 0;

  const navigate = useNavigate();

  useEffect(() => {
    setRole(existingUser.role || "user");
  }, [existingUser.role]); // eslint-disable-line[];

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      role: "user",
    };

    const url =
      "http://127.0.0.1:5000/" +
      (updating ? `update_user/${existingUser.id}` : "create_user");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    if (res.status !== 201 && res.status !== 200) {
      const data = await res.json();
      alert(data.message);
    } else if (res.status === 201) {
      navigate("/");
    } else {
      updateCallback();
    }
  };

  return (
    <div className="w-full max-w-lg ">
      <form
        className="bg-green-700 shadow-md rounded-3xl p-12 mt-8"
        action=""
        onSubmit={onSubmit}
      >
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
            {updating ? "Update" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
