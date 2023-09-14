import Button from './button'

interface Target {
    tittle : string
    subTittle : string
}
const CardTarget: React.FC<Target> = ({tittle,subTittle}) => {
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
                    <Button textBtn="Add Target" color="bg-bgBtn" />
                </div>
            </div>
        </div>
    )
}

export default CardTarget