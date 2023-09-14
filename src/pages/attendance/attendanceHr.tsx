import CardAttendance from "../../components/cardAttendance"
import Table from "../../components/table"

const AttendanceHr = () => {
    return (
        <div className="p-10 h-full bg-bgMain">
            <div className="py-2">
                <CardAttendance />
            </div>
            <div className="py-2 w-full bg-white rounded-cardBase">
                <div className="p-5">
                    <h1 className="font-semibold underline-offset-8 underline">
                        History Attandance
                    </h1>
                </div>
                <div className="p-2">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default AttendanceHr