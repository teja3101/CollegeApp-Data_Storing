import React, { useEffect, useState } from "react";
import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services";

const StudentForm = () => {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    prn: "",
    name: "",
    email: "",
    m1: "",
    m2: "",
    m3: "",
  });

  // Load Students
  const loadStudents = async () => {
    try {
      const res = await fetchStudents();
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Add / Update Student
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.prn === "" ||
      form.name === "" ||
      form.email === "" ||
      form.m1 === "" ||
      form.m2 === "" ||
      form.m3 === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (form.id) {
        await updateStudent(form.id, form);
        console.log("Student Updated Successfully");
      } else {
        await addStudent(form);
        console.log("Student Added Successfully");
      }

      setForm({
        prn: "",
        name: "",
        email: "",
        m1: "",
        m2: "",
        m3: "",
      });

      loadStudents();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Student
  const handleDelete = async (id) => {
    if (!window.confirm("Delete Student?")) return;

    await deleteStudent(id);

    loadStudents();
  };

  // Edit Student
  const handleEdit = (student) => {
    setForm(student);
  };

  return (
    <div>

      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>

        PRN :
        <input
          type="text"
          name="prn"
          value={form.prn}
          onChange={handleChange}
        />

        <br /><br />

        Name :
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        Email :
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        M1 :
        <input
          type="number"
          name="m1"
          value={form.m1}
          onChange={handleChange}
        />

        <br /><br />

        M2 :
        <input
          type="number"
          name="m2"
          value={form.m2}
          onChange={handleChange}
        />

        <br /><br />

        M3 :
        <input
          type="number"
          name="m3"
          value={form.m3}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          {form.id ? "Update Student" : "Add Student"}
        </button>

      </form>

      <hr />

      <h2>Student Records</h2>

      <table border="2" cellPadding="10">

        <thead>

          <tr>
            <th>PRN</th>
            <th>Name</th>
            <th>Email</th>
            <th>M1</th>
            <th>M2</th>
            <th>M3</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

        </thead>

        <tbody>

          {students.map((s) => {

            const total =
              Number(s.m1) +
              Number(s.m2) +
              Number(s.m3);

            const percentage =
              ((total / 300) * 100).toFixed(2);

            return (
              <tr key={s.id}>

                <td>{s.prn}</td>

                <td>{s.name}</td>

                <td>{s.email}</td>

                <td>{s.m1}</td>

                <td>{s.m2}</td>

                <td>{s.m3}</td>

                <td>{total}</td>

                <td>{percentage}%</td>

                <td>

                  <button
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </button>

                </td>

                <td>

                  <button
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            );
          })}

        </tbody>

      </table>

    </div>
  );
};

export default StudentForm;