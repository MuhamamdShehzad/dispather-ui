import Link from "next/link";
import React, { useState } from "react";
import { IoMdOpen } from "react-icons/io";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";

export default function Recive() {
  let data = useSelector((state) => state.app.client.data);
  data = data.filter((item) => item.sent === false);

  return (
    <div className="mx-10 my-20">
      <div className="m-10 flex flex-row justify-around">
        <Link href={"/dashboard"}>
          <button className="block bg-blue-300 px-6 py-2 rounded-lg">
            Histroy
          </button>
        </Link>
        <Link href={"/send"}>
          <button className="block  bg-blue-300 px-6 py-2 rounded-lg">
            Application Send
          </button>
        </Link>
        <Link href={"/receive"}>
          <button className="bg-blue-500  border-black border-4 px-6 py-2 rounded-lg">
            Application Recieve
          </button>
        </Link>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-8 py-2">
              <span className="text-gray-200">Id</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Type</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Roll No</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Date</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Priority</span>
            </th>
            <th className="px-8 py-2">
              <span className="text-gray-200">Track</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {" "}
          {data.map((obj, i) => (
            <Tr {...obj} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ ...props }) {
  const { id, type, rollno, date, status, priority } = props;
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <span className="text-center ml-2 font-semibold">
          {id || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{type || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{rollno || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Pending"
                ? "bg-blue-500"
                : "Approved"
                ? "bg-green-500"
                : "Rejected"
                ? "bg-red-500"
                : "bg-yellow-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2">
        <span>{priority || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <div className="flex flex-row gap-5">
          <Link href={{ pathname: "/send", query: { ...props } }}>
            <BiEdit className="cursor" size={25} color={"rgb(34,197,94)"} />
          </Link>
          <Link href={{ pathname: "/track", query: { ...props } }}>
            <IoMdOpen className="cursor" size={25} color="rgb(244,63,94)" />
          </Link>
        </div>
      </td>
    </tr>
  );
}
