import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdOpen } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export default function Table() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let appdata = useSelector((state) => state.app.client.data);

  useEffect(() => {
    setData(appdata);
  }, [appdata]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      return setData(appdata);
    }
    let newData = appdata.filter((obj) => {
      return obj.rollno === search;
    });
    setData(newData);
  };
  return (
    <div className="">
      <div className="m-10 flex flex-row justify-around">
        <Link href={""}>
          <button className="block border-black border-4 bg-blue-500 px-6 py-2 rounded-lg">
            Histroy
          </button>
        </Link>
        <Link href={"/send"}>
          <button className="block bg-blue-300 px-6 py-2 rounded-lg">
            Application Send
          </button>
        </Link>
        <Link href={"/receive"}>
          <button className="bg-blue-300 px-6 py-2 rounded-lg">
            Application Recieve
          </button>
        </Link>
      </div>
      <div className="mx-24 w-[50%] flex flex-row justify-around">
        <div className="input-type w-[25%]">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            className="my-4 border-2 px-5 py-3 focus:outline-none rounded-md"
            placeholder="Enter RollNo"
            required
          />
        </div>
        <div className="w-[25%]">
          <button
            className="bg-blue-500 my-4 border-2 px-5 py-3 w-full rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
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
              status === "Pending"
                ? "bg-blue-500"
                : status === "Approved"
                ? "bg-green-500"
                : status === "Rejected"
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
        <Link href={{ pathname: "/track", query: { ...props } }}>
          <IoMdOpen className="cursor" size={25} color="rgb(244,63,94)" />
        </Link>
      </td>
    </tr>
  );
}
