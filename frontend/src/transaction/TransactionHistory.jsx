import React from "react";
import { FaSearch, FaEdit } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const transactions = [
  {
    id: "#4567",
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    amount: "$1000",
    paymentMethod: "365-374-4961",
    dateCreated: "$1000",
    action: "Lueilwitz and Sons",
    status: "Active",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "#4567",
    name: "Lucian Obrien",
    email: "ashlynn.ohara62@gmail.com",
    amount: "$1900",
    paymentMethod: "904-966-2836",
    dateCreated: "$1900",
    action: "Gleichner, Mueller and Tromp",
    status: "Pending",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "#4567",
    name: "Deja Brady",
    email: "milo.farrell@hotmail.com",
    amount: "$1200",
    paymentMethod: "399-757-9909",
    dateCreated: "$1200",
    action: "Nikolaus - Leuschke",
    status: "Banned",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "#4567",
    name: "Harrison Stein",
    email: "violet.trake86@yahoo.com",
    amount: "$500",
    paymentMethod: "692-767-2903",
    dateCreated: "$500",
    action: "Hegmann, Kreiger and Bayer",
    status: "Rejected",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: "#4567",
    name: "Reece Chung",
    email: "letha.lubowitz24@yahoo.com",
    amount: "$1600",
    paymentMethod: "990-588-5716",
    dateCreated: "$1600",
    action: "Grimes Inc",
    status: "Active",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-600";
    case "Pending":
      return "bg-yellow-500";
    case "Banned":
      return "bg-orange-700";
    case "Rejected":
      return "bg-gray-500";
    default:
      return "bg-gray-700";
  }
};

const TransactionHistory = () => {
  return (
    <div className="bg-[#141415] text-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 px-4 py-2 rounded-md text-sm font-semibold text-black">
          + Add Payment
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-4 space-y-2 md:space-y-0">
        <div className="flex gap-2 flex-wrap">
          {["All", "Active", "Pending", "Banner", "Rejected"].map((status, i) => (
            <button
              key={i}
              className="px-3 py-1 text-sm bg-[#1f1f1f] rounded-full border border-[#2b2b2b]"
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search Plan Name"
            className="bg-[#1f1f1f] px-3 py-2 rounded-md text-sm outline-none border border-[#333]"
          />
          <button className="bg-[#1f1f1f] px-3 py-2 rounded-md text-sm border border-[#2a2a2a]">
            Download Excel
          </button>
          <select className="bg-[#1f1f1f] px-3 py-2 rounded-md text-sm border border-[#2a2a2a]">
            <option>Show 10</option>
            <option>Show 20</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-[#888] border-b border-[#2b2b2b]">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Amount</th>
              <th className="py-3 px-2">Payment Method</th>
              <th className="py-3 px-2">Date Created</th>
              <th className="py-3 px-2">Action</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="border-b border-[#2b2b2b]">
                <td className="py-3 px-2">{txn.id}</td>
                <td className="py-3 px-2 flex items-center gap-2">
                  <img
                    src={txn.img}
                    className="w-8 h-8 rounded-full object-cover"
                    alt={txn.name}
                  />
                  <div>
                    <div className="font-medium">{txn.name}</div>
                    <div className="text-xs text-[#aaa]">{txn.email}</div>
                  </div>
                </td>
                <td className="py-3 px-2">{txn.amount}</td>
                <td className="py-3 px-2">{txn.paymentMethod}</td>
                <td className="py-3 px-2">{txn.dateCreated}</td>
                <td className="py-3 px-2">{txn.action}</td>
                <td className="py-3 px-2">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${getStatusColor(
                      txn.status
                    )}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-3 px-2 flex gap-2">
                  <FaEdit className="cursor-pointer text-[#aaa]" title="Quick Edit" />
                  <BsThreeDotsVertical className="cursor-pointer text-[#aaa]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center text-xs text-[#888]">
        <div>Rows per page: 5</div>
        <div>6–10 of 11</div>
      </div>
    </div>
  );
};

export default TransactionHistory;
