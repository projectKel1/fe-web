import { LuActivity } from "react-icons/lu"
import CardDash from "../../components/cardDash"

const DashboardManager = () => {
  return (
    <section className="p-10">
      <div>
        <h1 className="font-semibold text-lg">
          Selamat Datang, Anda Login Sebagai Manager
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 py-4">
        <CardDash tittle="Jumlah Cuti Bulan ini" count="56" icons={<LuActivity/> }/>
        <CardDash tittle="Target Bulan ini" count="90" icons={<LuActivity/> }/>
        <CardDash tittle="Request Cuti Bawahan" count="5" icons={<LuActivity/> }/>
        <CardDash tittle="Request Cuti Karyawan" count="5" icons={<LuActivity/> }/>
        <CardDash tittle="Cuti" count="0" icons={<LuActivity/> }/>
        <CardDash tittle="Reimburstment" count="1" icons={<LuActivity/> }/>
        <CardDash tittle="Request Reimburstment" count="2" icons={<LuActivity/> }/>
      </div>
    </section>
  )
}

export default DashboardManager