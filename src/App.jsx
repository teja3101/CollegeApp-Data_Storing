import React, { useState } from "react";
import "./App.css";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import AdminD from "./components/AdminD";
import StudentForm from "./components/StudentForm";

const App = () => {
  const [screen, setScreen] = useState("login");

  const [currentUser, setCurrentUser] = useState(null);

  const [editUser, setEditUser] = useState(null);

  const [refresh, setRefresh] = useState(0);

  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
    setEditUser(null);
    setScreen("login");
  };

  return (
    <div>
      <center>

        <h1>************* THE KIRAN ACADEMY *************</h1>

        {/* LOGIN */}

        {screen === "login" && (
          <>
            <LoginForm
              setCurrentUser={setCurrentUser}
              setScreen={setScreen}
            />

            <br />

            <button onClick={() => setScreen("register")}>
              New User? Register
            </button>
          </>
        )}

        {/* REGISTRATION */}

        {screen === "register" && (
          <>
            <RegistrationForm
              editUser={editUser}
              setEditUser={setEditUser}
              refresh={refresh}
              setRefresh={setRefresh}
              setScreen={setScreen}
            />

            <br />

            <button onClick={() => setScreen("login")}>
              Back To Login
            </button>
          </>
        )}

        {/* ADMIN DASHBOARD */}

        {screen === "admin" && (
          <>
            <h2>Welcome Admin : {currentUser?.name}</h2>

            <button
              onClick={() => {
                setEditUser(null);
                setScreen("register");
              }}
            >
              Add New User
            </button>

            &nbsp;&nbsp;

            <button onClick={handleLogout}>
              Logout
            </button>

            <br />
            <br />

            <AdminD
              reload={refresh}
              sendUser={setEditUser}
              setScreen={setScreen}
              setRefresh={setRefresh}
            />
          </>
        )}

        {/* FACULTY DASHBOARD */}

        {screen === "faculty" && (
          <>
            <h2>Welcome Faculty : {currentUser?.name}</h2>

            <button onClick={handleLogout}>
              Logout
            </button>

            <br />
            <br />

            <StudentForm />
          </>
        )}

      </center>
    </div>
  );
};

export default App;