import axios from "axios"
import { LuBuilding, LuFeather, LuFileArchive, LuMail, LuMilestone, LuShieldAlert, LuTarget, LuUser } from "react-icons/lu"
import { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

interface ProfileData {
  fullname: string,
  email: string,
  gender: string,
  level: string,
  role_name: string,
  company_name: string,
  emergency_name: string,
  emergency_phone: string,
  emergency_status: string,
  no_bpjs: string,
  no_nik: string,
  no_nokk: string,
  no_npwp: string,
}
const Profile = () => {
  const [profile, setProfile] = useState<ProfileData>({
    fullname: '',
    email: '',
    gender: '',
    level: '',
    role_name: '',
    company_name: '',
    emergency_name: '',
    emergency_phone: '',
    emergency_status: '',
    no_bpjs: '',
    no_nik: '',
    no_nokk: '',
    no_npwp: '',
  })
  const getProfile = () => {
    const tempData: any = Cookies.get('data')
    const data = JSON.parse(tempData)
    const token = data.data.token
    axios.get('/my-profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setProfile(response.data.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  const navigate = useNavigate()
  useEffect(() => {
    getProfile()
    if (!Cookies.get('data')) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className='grid grid-cols-12 p-4'>
          <div className="col-span-6">
            <h1 className="font-bold text-[18px]">
              Profile
            </h1>
          </div>
          <div className="col-span-6 flex justify-end">
            <button className="text-white bg-bgBtn font-semibold rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
          </div>
        </div>
        <div className="grid grid-cols-12  gap-4 p-4">
          <div className="col-span-2">
            <div className="flex justify-center lg:justify-start">
              <img className="w-40 h-40 object-cover items-center ring-bgBtn ring p-2 rounded-full" alt="" />
            </div>
          </div>
          <div className="justify-center col-span-10">
            <form className="flex">
              <div className="w-1/2">
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Username</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuUser />
                      <h1>{profile.fullname ? profile.fullname : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Email</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuMail />
                      <h1>{profile.email ? profile.email : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">No Hp</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuFeather />
                      <h1>{profile.gender ? profile.gender : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">level</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuMilestone />
                      <h1>{profile.level ? profile.level : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Role</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuTarget />
                      <h1>{profile.role_name ? profile.role_name : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Company</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuBuilding />
                      <h1>{profile.company_name ? profile.company_name : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Emergency Name</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuShieldAlert />
                      <h1>{profile.emergency_name ? profile.emergency_name : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Emergency Phone</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuShieldAlert />
                      <h1>{profile.emergency_phone ? profile.emergency_phone : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">Emergency Status</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuShieldAlert />
                      <h1>{profile.emergency_status ? profile.emergency_status : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">NIK</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuFileArchive />
                      <h1>{profile.no_nik ? profile.no_nik : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">BPJS</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuFileArchive />
                      <h1>{profile.no_bpjs ? profile.no_bpjs : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">No KK</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuFileArchive />
                      <h1>{profile.no_nokk ? profile.no_nokk : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-6 relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-900">NPWP</label>
                  <div className="relative">
                    <div className="flex gap-4 items-center p-2 pointer-events-none">
                      <LuFileArchive />
                      <h1>{profile.no_npwp ? profile.no_npwp : 'No Data'}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile