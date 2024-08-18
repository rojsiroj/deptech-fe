"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ViewUser() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/v1/user/admin/detail/" + id,
        {
          headers: {
            accept: "application/json",
            authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5MTE4NCwiZXhwIjoxNzIzOTk0Nzg0fQ.BJhVguv518-2G_8fzvcVrd6uajnqgiqH1w-8Fm8jY9o",
          },
        }
      );
      setUser(result.data.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">View User</h1>
      <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>
              {user.first_name}&nbsp;{user.last_name}
            </td>
            <td>{user.email}</td>
            <td className="capitalize">{user.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
