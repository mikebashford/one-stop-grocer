import React from "react";

const Users = ({ users, updateUser, updateCallback, Register }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };
      const res = await fetch(
        `http://127.0.0.1:5000/delete_user/${id}`,
        options
      );
      if (res.status === 200) {
        updateCallback();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h2 className="flex justify-center text-lg font-bold my-8">Users</h2>
      <table className="flex justify-center">
        <thead className="">
          <tr className="flex justify-center space-x-24">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => updateUser(users)}>Update</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
