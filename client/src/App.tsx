import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";

import axios from "axios";

function App() {
  const [students, setstudents] = useState([]);

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getAllUsers = async () => {
    try {
      const response = await axios.get("/student/get");

      const userData: any = response.data.data;
      userData.map((user: any) => {
        user.name = user.firstName + " " + user.lastName;
      });

      setstudents(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addStudent = async (student: any) => {
    try {
      const response = await axios.post("/student/save", student);

      if (response.data.isSuccessful) {
        getAllUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="bg-blue-50 min-h-screen text-white p-4 align-middle">
        <h1 className="text-2xl font-bold text-center text-black">
          Mock Student Management System (ADD STUDENT)
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-1/2">
            <AddStudent addStudent={addStudent} />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="w-1/2">
            <AllStudents students={students} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
