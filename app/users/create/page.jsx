"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Addnewuser = () => {
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/user/admin/create", inputs, {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5NDk1NiwiZXhwIjoxNzI0MDgxMzU2fQ.TiOjrKfF2MuLReRNyJaoMNUko6M1XbW4CgHFMdAtz0A",
        },
      })
      .then(function (response) {
        console.log(response.data);
        router.push("/");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New User</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label className="block text-sm font-medium text-gray-900">
              First Name:
            </label>
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Enter Your First Name"
              name="first_name"
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
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="block text-sm font-medium text-gray-900">
              DoB:
            </label>
            <input
              type="date"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Enter Your Last Name"
              name="dob"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="email..."
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
              defaultValue="male"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Password..."
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnewuser;
