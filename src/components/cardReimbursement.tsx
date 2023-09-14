import Button from './button'

interface Reimbursement {
    tittle : string
    subTittle : string
}
const CardReimbursement: React.FC<Reimbursement> = ({tittle,subTittle}) => {
    return (
        <div className="rounded-cardBase bg-white w-full p-10">
            <div>
                <h1 className="font-semibold text-lg">
                    {tittle}
                </h1>
                <p className="text-subTitle font-medium text-sm">
                    {subTittle}
                </p>
            </div>
            <div className="py-10 flex flex-wrap justify-end">
                <div>
                    <Button textBtn="Add Request" color="bg-bgBtn" />
                </div>
            </div>
        </div>
    )
}

export default CardReimbursement