import { createBrowserRouter } from "react-router-dom";
import { Dashboardlayout } from "../components";
import Dashboard from "../Pages/Dashboard";
import Employees from "../Pages/Employees";
import Payroll from "../Pages/Payroll";
import Today_Attendance from "../Pages/Today_Attendance";
import Absent_Attendance from "../Pages/Absent_Attendance";
import Late_Attendance from "../Pages/Late_Attendance";
import History from "../Pages/History";
import Leave_Category from "../Pages/Leave_Category";
import Rejected_Leave from "../Pages/Rejected_Leave";
import Approved_Leave from "../Pages/Approved_Leave";
import Pending_Leave from "../Pages/Pending_Leave";
import Details from "../Pages/Details";
import Rate_Goal from "../Pages/Rate_Goal";
import Review from "../Pages/Review";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Dashboardlayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/employees",
                element: <Employees />
            },
            {
                path: "/payroll",
                element: <Payroll />
            },
            {
                path: "/today's-attendance",
                element: <Today_Attendance />
            },
            {
                path: "/absent-attendance",
                element: <Absent_Attendance />
            },
            {
                path: "/late-attendance",
                element: <Late_Attendance />
            },
            {
                path: "/history",
                element: <History />
            },
            {
                path: "/leave-category",
                element: <Leave_Category />
            },
            {
                path: "/rejected-leave",
                element: <Rejected_Leave />
            },
            {
                path: "/approved-leave",
                element: <Approved_Leave />
            },
            {
                path: "/pending-leave",
                element: <Pending_Leave />
            },
            {
                path: "/details",
                element: <Details />
            },
            {
                path: "/rate-goal",
                element: <Rate_Goal />
            },
            {
                path: "/review",
                element: <Review />
            }
        ]
    }
])