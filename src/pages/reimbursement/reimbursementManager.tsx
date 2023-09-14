import CardReimbursement from "../../components/cardReimbursement"
import Table from "../../components/table"

const ReimbursementManager = () => {
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <CardReimbursement tittle="Reimbursement Manager" subTittle="Check Reimbursement here" />
      </div>
      <div className="py-2 w-full bg-white rounded-cardBase">
        <div className="p-5">
          <h1 className="font-semibold underline-offset-8 underline">
            History Reimbursement
          </h1>
        </div>
        <div className="p-2">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default ReimbursementManager