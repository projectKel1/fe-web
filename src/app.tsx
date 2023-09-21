import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import DashboardManager from './pages/dashboard/dashboardManager';
import AttandanceManager from './pages/attendance/attandanceManager';
import AttendanceEmployee from './pages/attendance/attendanceEmployee';
import ReimbursementManager from './pages/reimbursement/reimbursementManager';
import ReimbursementEmployeeManager from './pages/reimbursement/reimbursementEmployeeManager';
import ReimbursmentEmployee from './pages/reimbursement/reimbursmentEmployee';
import TargetManager from './pages/target/targetManager';
import TargetEmployee from './pages/target/targetEmployee';
import LeaveManager from './pages/leave/leaveManagerEmployee';
import LeaveEmployee from './pages/leave/leaveEmployee';
import ReimbursementHr from './pages/reimbursement/reimbursementHr';
import AttandanceHr from './pages/attendance/attendanceHr';
import axios from 'axios';
import EmployeeHr from './pages/employee/employeeHr';
import LeaveHr from './pages/leave/leaveHr';
import CompanyHr from './pages/company/companyHr';
import DataAllUser from './pages/superadmin/dataAllUser';
import Profile from './pages/profile/profile';
import DataRole from './pages/superadmin/dataRole';
import EmployeeLevel from './pages/superadmin/employeeLevel';
import LeaveManagerEmployee from './pages/leave/leaveManager';
import ReimbursementManagerEmployee from './pages/reimbursement/reimbursementManagerEmployee';
import DataCompany from './pages/superadmin/dataCompany';
import ReimbursementRequestClevel from './pages/reimbursement/reimbursementRequestClevel';
import LeaveClevel from './pages/leave/leaveClevel';
import LeaveHrEmployee from './pages/leave/leaveHrEmployee';
import LeaveHrManager from './pages/leave/leaveHrManager';
import ReimbursementHrManager from './pages/reimbursement/reimbursementHrManager';
import ReimbursementHrEmployee from './pages/reimbursement/reimbursementHrEmployee';
import LeaveRequestManager from './pages/leave/leaveRequestManager';
import ReimbursementRequestHrEmployee from './pages/reimbursement/reimbursementRequestHrEmployee';
import ReimbursementRequestManager from './pages/reimbursement/reimbursementRequestManager';

function App() {
  axios.defaults.baseURL = 'https://hris-kelompok1.tech';
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<DashboardManager />} />
            <Route path="/attendance" element={<AttandanceManager />} />
            <Route path="/attendance-employee" element={<AttendanceEmployee />} />
            <Route path="/reimbursement-manager" element={<ReimbursementManager />} />
            <Route path="/reimbursement-employee-manager" element={<ReimbursementEmployeeManager />} />
            <Route path="/reimbursement-manager-employee" element={<ReimbursementManagerEmployee />} />
            <Route path="/reimbursement-request-clevel" element={<ReimbursementRequestClevel />} />
            <Route path="/reimbursement-request-manager" element={<ReimbursementRequestManager />} />
            <Route path="/reimbursement-request-hr-employee" element={<ReimbursementRequestHrEmployee />} />
            <Route path="/reimbursement-hr-employee" element={<ReimbursementHrEmployee />} />
            <Route path="/reimbursement-employee" element={<ReimbursmentEmployee />} />
            <Route path="/reimbursement-hr-employee" element={<ReimbursementHrManager />} />
            <Route path="/reimbursement-hr" element={<ReimbursementHr />} />
            <Route path="/target-manager" element={<TargetManager />} />
            <Route path="/target-employee" element={<TargetEmployee />} />
            <Route path="/leave-manager-employee" element={<LeaveManagerEmployee />} />
            <Route path="/leave-manager" element={<LeaveManager />} />
            <Route path="/leave-request-employee" element={<LeaveRequestManager />} />
            <Route path="/leave-clevel" element={<LeaveClevel />} />
            <Route path="/leave-employee" element={<LeaveEmployee />} />
            <Route path="/leave-hr-employee" element={<LeaveHrEmployee />} />
            <Route path="/leave-hr-manager" element={<LeaveHrManager />} />
            <Route path="/attendance-hr" element={<AttandanceHr />} />
            <Route path="/employee-hr" element={<EmployeeHr />} />
            <Route path="/leave-hr" element={<LeaveHr />} />
            <Route path="/company" element={<CompanyHr />} />
            <Route path="/data-company" element={<DataCompany />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/role" element={<DataRole />} />
            <Route path="/data-user" element={<DataAllUser />} />
            <Route path="/level" element={<EmployeeLevel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
