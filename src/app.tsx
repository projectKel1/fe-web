import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import DashboardManager from './pages/dashboard/dashboardManager';
import DashboardEmployee from './pages/dashboard/dashboardEmployee';
import AttandanceManager from './pages/attendance/attandanceManager';
import AttendanceEmployee from './pages/attendance/attendanceEmployee';
import ReimbursementManager from './pages/reimbursement/reimbursementManager';
import ReimbursementKaryawanManager from './pages/reimbursement/reimbursementKaryawanManager';
import ReimbursmentEmployee from './pages/reimbursement/reimbursmentEmployee';
import TargetManager from './pages/target/targetManager';
import LeaveManager from './pages/leave/leaveManager';
import LeaveEmployee from './pages/leave/leaveEmployee';
import DashboardHr from './pages/dashboard/dashboardHr';
import ReimbursementHr from './pages/reimbursement/reimbursementHr';
import AttandanceHr from './pages/attendance/attendanceHr';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard-manager" element={<DashboardManager />} />
            <Route path="/dashboard-employee" element={<DashboardEmployee />} />
            <Route path="/dashboard-hr" element={<DashboardHr />} />
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
            <Route path="/leave-manager" element={<LeaveManager />} />
            <Route path="/leave-employee" element={<LeaveEmployee />} />
            <Route path="/attendance-hr" element={<AttandanceHr />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
