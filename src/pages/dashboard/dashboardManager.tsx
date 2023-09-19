import { LuActivity } from "react-icons/lu"
import CardDash from "../../components/cardDash"
import axios from "axios"
import CardWelcome from "../../components/cardWelcome"
import { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
const DashboardManager = () => {
  const [usercount, setUsercount] = useState()
  const tempData: any = Cookies.get('data')
  const data = JSON.parse(tempData)
  const role = data.data.role_name.toLowerCase()
  const getData = async () => {
    try {
      const response = await axios.get(`/users`)
      setUsercount(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (!Cookies.get('data')) {
      navigate('/login')
    }
    getData()
  }, [])
  return (
    <section className="p-10 container mx-auto">
      <div className="row py-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <CardWelcome />
          </div>
        </div>
      </div>
      <div className="row py-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 flex flex-wrap gap-3">
            <CardDash tittle="Jumlah Cuti Bulan ini" count="56" icons={<LuActivity />} />
            <CardDash tittle="Target Bulan ini" count="90" icons={<LuActivity />} />
            <CardDash tittle="Request Cuti Bawahan" count="5" icons={<LuActivity />} />
            <CardDash tittle="Request Cuti Karyawan" count="5" icons={<LuActivity />} />
            <CardDash tittle="Cuti" count="0" icons={<LuActivity />} />
            <CardDash tittle="Reimburstment" count="1" icons={<LuActivity />} />
            <CardDash tittle="Request Reimburstment" count="2" icons={<LuActivity />} />
            <CardDash tittle="Target Bulan ini" count="100" icons={<LuActivity />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardManager