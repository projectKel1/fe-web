import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import axios from "axios";

interface CompanyData {
  name: string;
  address: string;
  description: string;
  visi: string;
  misi: string;
  email: string;
}

const CompanyHr = () => {
  const [companyData, setCompanyData] = useState<CompanyData>();

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = () => {
    const token: any = Cookies.get("token");
    const companyId: any = Cookies.get("company");
    
    axios
      .get(`/companies/${companyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCompanyData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <div className="rounded-cardBase bg-white w-full p-10">
          <div>
            <h1 className="font-semibold text-2xl">Company Profile</h1>
            <p className="text-subTitle font-medium text-sm text-justify">
              {companyData && companyData?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 px-6 w-full bg-white rounded-cardBase flex-grow flex flex-wrap gap-10 py-12">
        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Visi</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              {companyData && companyData?.visi}
            </span>
          </div>
        </div>

        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Misi</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              {companyData && companyData?.misi}
            </span>
          </div>
        </div>

        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Contact</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              {companyData && companyData?.address}
              <br />
              Email: {companyData && companyData?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHr;
