import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePeopleAlt, MdOutlineShoppingBag } from "react-icons/md";
import { FaChartBar, FaRegCalendarTimes, FaRegCalendarMinus, FaChartLine, FaStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { useRef, useEffect, useState } from "react";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentHeight1 = useRef<any>(null);
  const contentHeight2 = useRef<any>(null);
  const contentHeight3 = useRef<any>(null);
  const contentHeight4 = useRef<any>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname;

  useEffect(() => {
    if (contentHeight1.current) {
      contentHeight1.current.style.height =
        activeIndex === 1 ? `${contentHeight1.current.scrollHeight}px` : "0px";
    }
    if (contentHeight2.current) {
      contentHeight2.current.style.height =
        activeIndex === 2 ? `${contentHeight2.current.scrollHeight}px` : "0px";
    }
    if (contentHeight3.current) {
      contentHeight3.current.style.height =
        activeIndex === 3 ? `${contentHeight3.current.scrollHeight}px` : "0px";
    }
    if (contentHeight4.current) {
      contentHeight4.current.style.height =
        activeIndex === 4 ? `${contentHeight4.current.scrollHeight}px` : "0px";
    }
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-full border-r-[2px] border-[#F2F4F4] flex flex-col">
      <div className="h-[70px] w-[100%] border-b-[2px] border-[#F2F4F4] pl-[15px] flex items-center">
        <h2 className="text-[#000] text-[25px] font-[800]">Human Resource</h2>
      </div>

      <div className="w-[100%] flex flex-col pl-[15px] pr-[15px] h-[100%] pt-[10px]">
        <div
          onClick={() => {
            navigate("/");
          }}
          className={`w-full min-h-[45px] rounded-md flex justify-start items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
          }`}
        >
          <div className="text-[22px]">
            <RxDashboard />
          </div>
          <div className="font-[600] text-[15px] ml-[20px]">Overview</div>
        </div>
        <div
          onClick={() => {
            navigate("/employees");
          }}
          className={`w-full min-h-[45px] rounded-md flex justify-start items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/employees" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
          }`}
        >
          <div className="text-[24px]">
            <MdOutlinePeopleAlt />
          </div>
          <div className="font-[600] text-[15px] ml-[20px]">Employees</div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`w-full text-left flex items-center justify-between text-[#757575] font-[600] cursor-pointer pl-[20px] mt-[5px]`}
            onClick={() => handleItemClick(1)}
          >
            <div className="flex items-center">
              <AiOutlineDollarCircle className="text-[20px]" />
              <h3 className="text-[16px] ml-[20px] font-bold">Financials</h3>
            </div>

            <RiArrowDropDownLine
              className={`text-[30px] transition-transform duration-500 ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            ref={contentHeight1}
            className="transition-height duration-700"
            style={{
              height: activeIndex === 1 ? `${contentHeight1.current.scrollHeight}px` : "0px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => {
                navigate("/payroll");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/payroll" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <BsWallet2 />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Payroll</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`w-full text-left flex items-center justify-between text-[#757575] font-[600] cursor-pointer pl-[20px] mt-[12px]`}
            onClick={() => handleItemClick(2)}
          >
            <div className="flex items-center">
              <FaChartBar className="text-[20px]" />
              <h3 className="text-[16px] ml-[20px] font-bold">Attendance</h3>
            </div>

            <RiArrowDropDownLine
              className={`text-[30px] transition-transform duration-500 ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            ref={contentHeight2}
            className="transition-height duration-700"
            style={{
              height: activeIndex === 2 ? `${contentHeight2.current.scrollHeight}px` : "0px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => {
                navigate("/today's-attendance");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/today's-attendance" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaChartBar />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Today's Attendance</div>
            </div>

            <div
              onClick={() => {
                navigate("/absent-attendance");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/absent-attendance" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaRegCalendarTimes />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Absent Employees</div>
            </div>

            <div
              onClick={() => {
                navigate("/late-attendance");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/late-attendance" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaRegCalendarMinus />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Late Employees</div>
            </div>

            <div
              onClick={() => {
                navigate("/history");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/history" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[20px]">
                <MdOutlineShoppingBag />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">History</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`w-full text-left flex items-center justify-between text-[#757575] font-[600] cursor-pointer pl-[20px] mt-[12px]`}
            onClick={() => handleItemClick(3)}
          >
            <div className="flex items-center">
              <FaChartLine className="text-[20px]" />
              <h3 className="text-[16px] ml-[20px] font-bold">Performance</h3>
            </div>

            <RiArrowDropDownLine
              className={`text-[30px] transition-transform duration-500 ${
                activeIndex === 3 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            ref={contentHeight3}
            className="transition-height duration-700"
            style={{
              height: activeIndex === 3 ? `${contentHeight3.current.scrollHeight}px` : "0px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => {
                navigate("/review");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/review" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <GoGoal />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Review</div>
            </div>

            <div
              onClick={() => {
                navigate("/rate-goal");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/rate-goal" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaStar />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Rate Goal</div>
            </div>

            <div
              onClick={() => {
                navigate("/details");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/details" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaRegCalendarMinus />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Details</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className={`w-full text-left flex items-center justify-between text-[#757575] font-[600] cursor-pointer pl-[20px] mt-[12px]`}
            onClick={() => handleItemClick(4)}
          >
            <div className="flex items-center">
              <FaChartLine className="text-[20px]" />
              <h3 className="text-[16px] ml-[20px] font-bold">Manage Leave</h3>
            </div>

            <RiArrowDropDownLine
              className={`text-[30px] transition-transform duration-500 ${
                activeIndex === 4 ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            ref={contentHeight4}
            className="transition-height duration-700"
            style={{
              height: activeIndex === 3 ? `${contentHeight3.current.scrollHeight}px` : "0px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => {
                navigate("/pending-leave");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/pending-leave" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <GoGoal />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Pending Leave</div>
            </div>

            <div
              onClick={() => {
                navigate("/approved-leave");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/approved-leave" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaStar />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Approved Leave</div>
            </div>

            <div
              onClick={() => {
                navigate("/rejected-leave");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/rejected-leave" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaRegCalendarMinus />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Rejected Leave</div>
            </div>

            <div
              onClick={() => {
                navigate("/leave-category");
              }}
              className={`w-full rounded-md flex mt-[10px] h-[40px] justify-start items-center pl-[30px] mb-[5px] cursor-pointer ${
                active === "/leave-category" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
              }`}
            >
              <div className="text-[17px]">
                <FaRegCalendarMinus />
              </div>
              <div className="font-[600] text-[15px] ml-[12px]">Leave Category</div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/");
          }}
          className={`w-full mt-[14px] min-h-[45px] rounded-md flex justify-start items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
          }`}
        >
          <div className="text-[22px]">
            <RxDashboard />
          </div>
          <div className="font-[600] text-[15px] ml-[20px]">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
