import api from "./api";

// ================= USERS =================

export const fetchAllUsers = () => {
    return api.get("/users");
};

export const addUser = (user) => {
    return api.post("/users", user);
};

export const updateUser = (id, user) => {
    return api.put(`/users/${id}`, user);
};

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};

// ================= STUDENTS =================

export const fetchStudents = () => {
    return api.get("/students");
};

export const addStudent = (student) => {
    return api.post("/students", student);
};

export const updateStudent = (id, student) => {
    return api.put(`/students/${id}`, student);
};

export const deleteStudent = (id) => {
    return api.delete(`/students/${id}`);
};