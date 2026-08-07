import React, { useEffect, useState } from "react";
import { deleteUser, fetchAllUsers } from "../services";

const AdminD = ({ reload, sendUser, setScreen, setRefresh }) => {

  const [users, setUsers] = useState([]);

  // Fetch all users
  const loadUsers = async () => {
    try {
      const res = await fetchAllUsers();
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [reload]);

  // Delete User
  const handleDelete = async (id) => {

    let confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {

      await deleteUser(id);

      console.log("User Deleted Successfully");

      loadUsers();

      setRefresh((prev) => prev + 1);

    } catch (err) {

      console.log(err);

    }
  };

  // Edit User
  const handleEdit = (user) => {

    sendUser(user);

    setScreen("register");

  };

  return (

    <div>

      <h2>Admin Dashboard</h2>

      <table border="2" cellPadding="10">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Password</th>

            <th>Role</th>

            <th>Delete</th>

            <th>Edit</th>

          </tr>

        </thead>

        <tbody>

          {
            users.length > 0 ? (

              users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.password}</td>

                  <td>{user.role}</td>

                  <td>

                    <button
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>

                  </td>

                  <td>

                    <button
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="7">

                  No Users Found

                </td>

              </tr>

            )
          }

        </tbody>

      </table>

    </div>

  );

};

export default AdminD;