import ButtonProps from "../../components/reUse/ButtonProps";
import { employees } from "../../utils/EmployeeDetails";
import EmployeeTable from "./EmployeeTable";

const Employees = () => {
  return (
    <div className=" flex items-center justify-center pb-[30px]">
      <div className="w-[95%] flex flex-col gap-4">
        <div className="w-3/12">
          <h2 className="text-[20px] font-[700] text-[var(--black)]">
            All Employees
          </h2>
          <p className="text-[14px] font-[500] text-[#A1A1A1]">
            View and manage employees
          </p>
        </div>

        <div className="bg-[#FFFFFF] px-[20px] flex flex-col gap-3 pt-[10px] py-[30px]">
          <h2 className="text-[20px] font-[700] text-[var(--black)]">
            All Employees
          </h2>

          <div className=" py-2 flex gap-2">
            <input
              type="text"
              placeholder="Search by ID..."
              className="bg-[#F8F8F8] h-10 w-64 p-2 focus:outline-none focus:ring-2 focus:ring-[#0333AE] text-[15px] font-[600] text-[#6C757D]"
            />
            <input
              type="text"
              placeholder="Search by Name..."
              className="bg-[#F8F8F8] h-10 w-64 p-2 focus:outline-none focus:ring-2 focus:ring-[#0333AE] text-[15px] font-[600] text-[#6C757D]"
            />
            <input
              type="text"
              placeholder="Search by Job Role..."
              className="bg-[#F8F8F8] h-10 w-64 p-2 focus:outline-none focus:ring-2 focus:ring-[#0333AE] text-[15px] font-[600] text-[#6C757D]"
            />

            <ButtonProps
              label="Search"
              backgroundColor="bg-[#3D6CF6]"
              textColor="text-[white]"
              width="w-64"
            />
          </div>

          <div className="">
            <EmployeeTable employees={employees} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
