import React, { useState } from "react";
import { Employee } from "../../utils/types";

interface TableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<TableProps> = ({ employees }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className=" border border-gray-200 pb-1">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 ">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap text-center  px-4 py-2 text-[15px] font-[700] text-gray-900">
                ID
              </th>
              <th className="text-[15px] font-[700] whitespace-nowrap text-center py-2 text-gray-900">
                Photo
              </th>
              <th className="text-[15px] text-center  font-[700] whitespace-nowrap  py-2   text-gray-900">
                Name
              </th>
              <th className="text-[15px] text-center font-[700] whitespace-nowrap  py-2 text-gray-900">
                Gender
              </th>
              <th className="text-[15px] text-center font-[700] whitespace-nowrap  py-2 text-gray-900">
                Email
              </th>
              <th className="text-[15px] font-[700] whitespace-nowrap  py-2 text-center text-gray-900">
                Job Role
              </th>
              <th className="text-[15px] font-[700] whitespace-nowrap  py-2 text-center text-gray-900">
                Address
              </th>
              <th className="text-[15px] font-[700] whitespace-nowrap  py-2 text-center text-gray-900">
                Phone No
              </th>
              <th className="text-[15px] font-[700] whitespace-nowrap  py-2 text-center text-gray-900"></th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr
                key={employee.id}
                className={` ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="text-[14px] text-[#646464] bg-[#80808054] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.id}
                </td>
                <td className="whitespace-nowrap py-2 flex items-center justify-center">
                  <img
                    src={employee.photo}
                    alt={employee.name}
                    className="w-9 h-9 rounded-full"
                  />
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.name}
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.gender}
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.email}
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2 text-center">
                  {employee.jobRole}
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.address}
                </td>
                <td className="text-[14px] text-[#646464] font-[500] whitespace-nowrap py-2  text-center">
                  {employee.phone}
                </td>
                <td className="whitespace-nowrap py-2 text-gray-700 relative">
                  <button className="inline-flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-200">
                    &#x2022;&#x2022;&#x2022;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 px-4 py-4">
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <li key={pageIndex}>
              <button
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`block h-8 w-8 rounded border ${
                  currentPage === pageIndex + 1
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-100 bg-white text-gray-900"
                } text-center leading-8`}
              >
                {pageIndex + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default EmployeeTable;
