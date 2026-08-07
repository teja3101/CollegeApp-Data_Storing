import React, { useEffect, useState } from "react";
import { addUser, updateUser } from "../services";

const RegistrationForm = ({
    editUser,
    setEditUser,
    refresh,
    setRefresh,
    setScreen,
}) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    // Fill form when Edit button is clicked
    useEffect(() => {
        if (editUser) {
            setForm(editUser);
        }
    }, [editUser]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            form.name === "" ||
            form.email === "" ||
            form.password === "" ||
            form.role === ""
        ) {
            console.log("Please fill all fields");
            return;
        }

        try {
            if (form.id) {
                // Update User
                await updateUser(form.id, form);

                
            } else {
                // Add User
                await addUser(form);

              
            }

            // Refresh Admin Table
            setRefresh(refresh + 1);

            // Clear Form
            setForm({
                name: "",
                email: "",
                password: "",
                role: "",
            });

            setEditUser(null);

            // Go back to Admin Dashboard
            setEditUser(null);
            setScreen("admin");
        } catch (err) {
            console.log(err);
            console.log("Something went wrong");
        }
    };

    return (
        <div>

            <h2>
                {form.id ? "Update User" : "User Registration"}
            </h2>

            <form onSubmit={handleSubmit}>

                <label>Name :</label>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />

                <br />
                <br />

                <label>Email :</label>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                <br />
                <br />

                <label>Password :</label>

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <br />
                <br />

                <label>Role :</label>

                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>

                    <option value="admin">Admin</option>

                    <option value="faculty">Faculty</option>
                </select>

                <br />
                <br />

                <button type="submit">
                    {form.id ? "Update User" : "Register"}
                </button>

            </form>

        </div>
    );
};

export default RegistrationForm;