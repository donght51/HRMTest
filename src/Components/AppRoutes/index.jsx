import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Staff from "../../Pages/Staff";
import Onleave from "../../Pages/Onleave";
import Overtime from "../../Pages/Overtime";
import Recruitment from "../../Pages/Recruitment";
import Salary from "../../Pages/Salary";
import Contract from "../../Pages/Contract";
import Department from "../../Pages/Department";
import MyDepartment from "../../Pages/MyDepartment";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/staff-list" element={<Staff />}></Route>
            <Route path="/department" element={<Department />}></Route>
            <Route path="/my-department" element={<MyDepartment />}></Route>
            <Route path="/onleave" element={<Onleave />}></Route>
            <Route path="/overtime" element={<Overtime />}></Route>
            <Route path="/recruitment" element={<Recruitment />}></Route>
            <Route path="/salary" element={<Salary />}></Route>
            <Route path="/contract" element={<Contract />}></Route>
        </Routes>
    )
}
export default AppRoutes;