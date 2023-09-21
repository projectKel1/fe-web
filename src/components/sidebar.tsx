import { Link, useLocation } from 'react-router-dom';
import {
  LuPieChart,
  LuCalendarRange,
  LuShield,
  LuBuilding,
  LuCircleDollarSign,
  LuBriefcase,
  LuUsers,
  LuRollerCoaster,
  LuLayers,
  LuTarget,
} from 'react-icons/lu';
import Logo from '../assets/logo.png';
import React from 'react';
import Cookies from 'js-cookie';
interface Slide {
  slide: boolean;
}
const Sidebar: React.FC<Slide> = ({ slide }) => {
  const location = useLocation();
  const role_name = Cookies.get('role');
  const level = Cookies.get('level');

  const sideLink = [
    {
      to: '/dashboard',
      url: <LuPieChart size={25} />,
      name: 'Dashboard',
    },
    {
      to: '/attendance',
      url: <LuCalendarRange size={25} />,
      name: 'Attendance',
    },
    {
      to: '/reimbursement-manager',
      url: <LuCircleDollarSign size={25} />,
      name: 'Reimbursement',
    },
    {
      to: '/data-user',
      url: <LuUsers size={25} />,
      name: 'Data User',
    },
    {
      to: '/role',
      url: <LuRollerCoaster size={25} />,
      name: 'Data Role',
    },
    {
      to: '/level',
      url: <LuLayers size={25} />,
      name: 'Data Level',
    },
    {
      to: '/company',
      url: <LuBuilding size={25} />,
      name: 'Company',
    },
    {
      to: '/data-company',
      url: <LuBuilding size={25} />,
      name: 'Data Company',
    },
    {
      to: '/reimbursement-manager-employee',
      url: <LuShield size={25} />,
      name: 'Reimburstmen Manager',
    },
    {
      to: '/reimbursement-hr',
      url: <LuShield size={25} />,
      name: 'Reimburstmen',
    },
    {
      to: '/target-manager',
      url: <LuShield size={25} />,
      name: 'List Target Employee',
    },
    {
      to: '/target-employee',
      url: <LuTarget size={25} />,
      name: 'Target Employee',
    },
    {
      to: '/leave-manager',
      url: <LuBriefcase size={25} />,
      name: 'Leave Employee',
    },
    {
      to: '/leave-manager-employee',
      url: <LuBriefcase size={25} />,
      name: 'Leave',
    },
    {
      to: '/leave-hr',
      url: <LuBriefcase size={25} />,
      name: 'Leave Manager',
    },
  ];
  return (
    <div>
      <div className="space-y-4 h-screen">
        <div className="px-4 py-5 flex gap-2 items-center">
          <div>
            <img src={Logo} className="w-10" alt="" />
          </div>
          {slide ? null : <h1 className="font-semibold">HRIS App</h1>}
        </div>
        {sideLink.map((element, index) => {
          if (
            (element.to === '/target-manager' ||
              element.to === '/attendance-manager' ||
              element.to === '/target-employee' ||
              element.to === '/reimbursement-karyawan-manager' ||
              element.to === '/reimbursement-manager-employee' ||
              element.to === '/reimbursement-manager' ||
              element.to === '/reimbursement-hr' ||
              element.to === '/leave-manager-employee' ||
              element.to === '/leave-hr' ||
              element.to === '/company' ||
              element.to === '/leave-manager') &&
            role_name == 'superadmin' &&
            level === 'employee'
          ) {
            return null;
          }
          if (
            (element.to === '/data-user' ||
              element.to === '/data-company' ||
              element.to === '/company' ||
              element.to === '/role' ||
              element.to === '/level' ||
              element.to === '/reimbursement-karyawan-manager' ||
              element.to === '/reimbursement-hr' ||
              element.to === '/company' ||
              element.to === '/leave-hr' ||
              element.to === '/leave-manager' ||
              element.to === '/reimbursement-manager-employee' ||
              element.to === '/target-manager') &&
            role_name === 'non-hr' &&
            level === 'employee'
          ) {
            return null;
          }
          if (
            (element.to === '/data-user' ||
              element.to === '/data-company' ||
              element.to === '/company' ||
              element.to === '/role' ||
              element.to === '/level' ||
              element.to === '/reimbursement-hr' ||
              element.to === '/company' ||
              element.to === '/company' ||
              element.to === '/leave-hr' ||
              element.to === '/target-employee') &&
            role_name === 'non-hr' &&
            level === 'manager'
          ) {
            return null;
          }
          if (
            (element.to === '/data-user' ||
              element.to === '/data-company' ||
              element.to === '/level' ||
              element.to === '/role' ||
              element.to === '/reimbursement-manager' ||
              element.to === '/target-manager' ||
              element.to === '/leave-manager-employee' ||
              element.to === '/reimbursement-hr' ||
              element.to === '/target-employee') &&
            role_name === 'hr' &&
            level === 'c-level'
          ) {
            return null;
          }
          return (
            <div key={index}>
              <div className="space-y-2 font-medium px-4">
                <Link to={element.to}>
                  <div
                    className={`cursor-pointer w-full flex items-center py-2 px-2 rounded-lg hover:w-auto hover:bg-bgBtn text-gray-700 hover:animations hover:text-white ${
                      location.pathname === element.to
                        ? 'bg-bgBtn  rounded-xl shadow-lg text-white font-bold'
                        : 'font-semibold'
                    }`}
                  >
                    <span>{element.url}</span>
                    <div>
                      <h1
                        className={`px-4 ${
                          slide ? `hidden` : ``
                        } tracking-wide text-sm`}
                      >
                        {element.name}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
