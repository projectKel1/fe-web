import Button from "./button"

const CardAttendance = () => {
    return (
        <div className="rounded-cardBase bg-white w-full p-10">
            <div>
                <h1 className="font-semibold text-lg">
                    Presensi Jam Kerja
                </h1>
                <p className="text-subTitle font-medium text-sm">
                    Cek Absensi Disini
                </p>
            </div>
            <div className="py-10 flex flex-wrap justify-between">
                <div>
                    <div className="py-1">
                        <h1 className="font-semibold">Jam Check In</h1>
                    </div>
                    <div className="py-1">
                        <span className="font-medium">
                            08 : 00 - 12/01/2023
                        </span>
                    </div>
                    <div>
                        <Button textBtn="Check In" color="bg-bgBtn" />
                    </div>
                </div>
                <div>
                    <div className="py-1">
                        <h1 className="font-semibold">Jam Check Out</h1>
                    </div>
                    <div className="py-1">
                        <span className="font-medium">
                            017 : 00 - 12/01/2023
                        </span>
                    </div>
                    <div>
                        <Button textBtn="Check Out" color="bg-bgBtnRed" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardAttendance