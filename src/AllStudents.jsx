import React from "react";
import { Link } from "react-router-dom";

const AllStudents = () => {
  // Mock data with random Indian student names and details
  const students = [
    { id: 1, name: "Amit Kumar", email: "amit.kumar@example.com", username: "amit_kumar" },
    { id: 2, name: "Priya Singh", email: "priya.singh@example.com", username: "priya_singh" },
    { id: 3, name: "Rahul Sharma", email: "rahul.sharma@example.com", username: "rahul_sharma" },
    // Add more student details as needed
  ];

  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center mb-6">All Students</h1>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.username}</td>
                <td>
                  <Link to={`/student/${student.id}`} className="underline hover:text-yellow-500">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
