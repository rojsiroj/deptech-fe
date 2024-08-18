"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost:3000/api/v1/user/admin/list", {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5MTE4NCwiZXhwIjoxNzIzOTk0Nzg0fQ.BJhVguv518-2G_8fzvcVrd6uajnqgiqH1w-8Fm8jY9o",
        },
      })
      .then(function (response) {
        setUsers(response.data.data.data);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/user/admin/delete/${id}`)
      .then(function (response) {
        getUsers();
      });
  };

  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Gender</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="bg-white border-b">
            <td className="py-3 px-6">{user.id}</td>
            <td className="py-3 px-6">
              {user.first_name}
              &nbsp;
              {user.last_name}
            </td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6 capitalize">{user.gender}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/users/read/${user.id}`} className="btn btn-success">
                Read
              </Link>
              <Link className="btn btn-info" href={`users/edit/${user.id}/`}>
                Edit
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
