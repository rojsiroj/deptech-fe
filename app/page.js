"use client";

import ListUser from "@/components/ListUser";
import ListProductCategory from "@/components/ListProductCategory";
import { Suspense, useState } from "react";
import Link from "next/link";

export default function Home() {
  let [activeTab, setActiveTab] = useState("User");

  const tabs = ["User", "Category", "Product", "Transaction"];

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">DepTech FE</h1>
      </div>
      <div role="tablist" className="tabs tabs-bordered">
        {tabs.map((tab, id) => {
          return (
            <a
              key={id}
              role="tab"
              className={`${tab === activeTab && "tab-active"} tab`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </a>
          );
        })}
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/users/create" className="btn btn-primary">
            Add New User
          </Link>
        </div>
        <Suspense fallback="Loading...">
          <ListUser />
        </Suspense>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/users/create" className="btn btn-primary">
            Add New Product Category
          </Link>
        </div>
        <Suspense fallback="Loading...">
          <ListProductCategory />
        </Suspense>
      </div>
    </div>
  );
}
