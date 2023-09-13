import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/dashboard/dashboardManager';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
