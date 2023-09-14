import { LuActivity } from 'react-icons/lu';
import CardDash from '../../components/cardDash';

const DashboardEmployee = () => {
  return (
    <section className="p-10">
      <div>
        <h1 className="font-semibold text-lg">
          Selamat Datang, Anda Login Sebagai HR
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 py-4">
        <CardDash
          tittle="Jumlah Cuti Bulan ini"
          count="17"
          icons={<LuActivity />}
        />
        <CardDash
          tittle="Target Bulan ini"
          count="100"
          icons={<LuActivity />}
        />
        <CardDash tittle="Cuti" count="7" icons={<LuActivity />} />
        <CardDash
          tittle="Request Reimburstment"
          count="4"
          icons={<LuActivity />}
        />
      </div>
    </section>
  );
};

export default DashboardEmployee;
