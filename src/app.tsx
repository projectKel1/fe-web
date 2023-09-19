import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import DashboardManager from './pages/dashboard/dashboardManager';
import AttandanceManager from './pages/attendance/attandanceManager';
import AttendanceEmployee from './pages/attendance/attendanceEmployee';
import ReimbursementManager from './pages/reimbursement/reimbursementManager';
import ReimbursementKaryawanManager from './pages/reimbursement/reimbursementKaryawanManager';
import ReimbursmentEmployee from './pages/reimbursement/reimbursmentEmployee';
import TargetManager from './pages/target/targetManager';
import TargetEmployee from './pages/target/targetEmployee';
import LeaveManager from './pages/leave/leaveManager';
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

function App() {
  axios.defaults.baseURL = 'http://34.101.39.199';
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<DashboardManager />} />
            <Route path="/attendance-manager" element={<AttandanceManager />} />
            <Route
              path="/attendance-employee"
              element={<AttendanceEmployee />}
            />
            <Route
              path="/reimbursement-manager"
              element={<ReimbursementManager />}
            />
            <Route
              path="/reimbursement-karyawan-manager"
              element={<ReimbursementKaryawanManager />}
            />
            <Route
              path="/reimbursement-employee"
              element={<ReimbursmentEmployee />}
            />
            <Route path="/reimbursement-hr" element={<ReimbursementHr />} />
            <Route path="/target-manager" element={<TargetManager />} />
            <Route path="/target-employee" element={<TargetEmployee />} />
            <Route path="/leave-manager" element={<LeaveManager />} />
            <Route path="/leave-employee" element={<LeaveEmployee />} />
            <Route path="/attendance-hr" element={<AttandanceHr />} />
            <Route path="/employee-hr" element={<EmployeeHr />} />
            <Route path="/leave-hr" element={<LeaveHr />} />
            <Route path="/company-hr" element={<CompanyHr />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/role" element={<DataRole />} />
            <Route path="/data-all-user" element={<DataAllUser />} />
            <Route path="/level" element={<EmployeeLevel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
