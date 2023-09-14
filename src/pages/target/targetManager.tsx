import CardTarget from "../../components/cardTarget"
import Table from "../../components/table"

const TargetManager = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2">
                <CardTarget tittle="List Target Karyawan " subTittle="Check List Target Karyawan" />
            </div>
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Target Karyawan
                    </h1>
                </div>
                <div className="p-2">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default TargetManager