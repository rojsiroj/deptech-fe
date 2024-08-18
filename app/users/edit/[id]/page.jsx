"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function Edituser() {
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get("http://localhost:3000/api/v1/user/admin/detail/" + id, {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5MTE4NCwiZXhwIjoxNzIzOTk0Nzg0fQ.BJhVguv518-2G_8fzvcVrd6uajnqgiqH1w-8Fm8jY9o",
        },
      })
      .then(function (response) {
        setInputs(response.data.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:3000/api/v1/user/admin/update/" + id, inputs, {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5MTE4NCwiZXhwIjoxNzIzOTk0Nzg0fQ.BJhVguv518-2G_8fzvcVrd6uajnqgiqH1w-8Fm8jY9o",
        },
      })
      .then(function (response) {
        console.log(response.data);
        router.push("/");
      });
  };
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            {" "}
            ID:
          </label>
          <input type="text" id="id" name="id" value={id} disabled />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            First Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Enter Your First Name"
            name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Last Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Enter Your Last Name"
            name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            {" "}
            Email:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            id="email"
            placeholder="Enter email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Gender:
          </label>
          <select
            name="gender"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={handleChange}
            value={inputs.gender || ""}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" name="update" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
