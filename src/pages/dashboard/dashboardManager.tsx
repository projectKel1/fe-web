import { LuActivity } from "react-icons/lu"
import CardDash from "../../components/cardDash"
import axios from "axios"
import CardWelcome from "../../components/cardWelcome"
// import { useEffect, useState } from 'react'

const DashboardManager = () => {
  // const [reimbursement, setReimbursement] = useState()
  // const getData = async () => {
  //   try {
  //     const response = await axios.get(`https://node.flattenbot.site/request-reimbursment`)
  //     console.log(response)
  //     setReimbursement(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  // console.log(reimbursement)

  return (
    <section className="p-10">
      <div className="py-2">
        <h1 className="font-semibold text-2xl">
          Selamat Datang, Anda Login Sebagai Manager
        </h1>
      </div>
      <div className="row">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8">
            <CardWelcome />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 py-4">
        <CardDash tittle="Jumlah Cuti Bulan ini" count="56" icons={<LuActivity />} />
        <CardDash tittle="Target Bulan ini" count="90" icons={<LuActivity />} />
        <CardDash tittle="Request Cuti Bawahan" count="5" icons={<LuActivity />} />
        <CardDash tittle="Request Cuti Karyawan" count="5" icons={<LuActivity />} />
        <CardDash tittle="Cuti" count="0" icons={<LuActivity />} />
        <CardDash tittle="Reimburstment" count="1" icons={<LuActivity />} />
        <CardDash tittle="Request Reimburstment" count="2" icons={<LuActivity />} />
      </div>
    </section>
  )
}

export default DashboardManager