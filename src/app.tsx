import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import DashboardManager from './pages/dashboard/dashboardManager';
import DashboardEmployee from './pages/dashboard/dashboardEmployee';
import AttandanceManager from './pages/attendance/attandanceManager';
import ReimbursementManager from './pages/reimbursement/reimbursementManager';
import ReimbursementKaryawanManager from './pages/reimbursement/reimbursementKaryawanManager';
import TargetManager from './pages/target/targetManager';
import LeaveManager from './pages/leave/leaveManager';
import AttendanceHr from './pages/attendance/attendanceHr';

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
            <Route path="/attendance-manager" element={<AttandanceManager />} />
            <Route path="/attendance-hr" element={<AttendanceHr />} />
            <Route path="/reimbursement-manager" element={<ReimbursementManager />} />
            <Route path="/reimbursement-karyawan-manager" element={<ReimbursementKaryawanManager />} />
            <Route path="/target-manager" element={<TargetManager />} />
            <Route path="/leave-manager" element={<LeaveManager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
