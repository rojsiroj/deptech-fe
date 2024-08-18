"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListproductCategory() {
  const [ProductCategories, setProductCategories] = useState([]);

  useEffect(() => {
    getProductCategories();
  }, []);

  function getProductCategories() {
    axios
      .get("http://localhost:3000/api/v1/product/category/list", {
        headers: {
          accept: "application/json",
          authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDJjOTU5LTgyZjUtNGI0MS05NGFiLTI2OGU4OGFiMjk3NCIsImlhdCI6MTcyMzk5NDk1NiwiZXhwIjoxNzI0MDgxMzU2fQ.TiOjrKfF2MuLReRNyJaoMNUko6M1XbW4CgHFMdAtz0A",
        },
      })
      .then(function (response) {
        setProductCategories(response.data.data.data);
      });
  }

  const deleteproductCategory = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/product/category/delete/${id}`)
      .then(function (response) {
        getProductCategories();
      });
  };

  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Description</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {ProductCategories.map((productCategory, key) => (
          <tr key={key} className="bg-white border-b">
            <td className="py-3 px-6">{productCategory.id}</td>
            <td className="py-3 px-6">{productCategory.name}</td>
            <td className="py-3 px-6">{productCategory.description}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link
                href={`/ProductCategories/read/${productCategory.id}`}
                className="btn btn-success"
              >
                Read
              </Link>
              <Link
                className="btn btn-info"
                href={`ProductCategories/edit/${productCategory.id}/`}
              >
                Edit
              </Link>
              <button
                onClick={() => deleteproductCategory(productCategory.id)}
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
