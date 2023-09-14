interface CardDash {
    tittle: string
    count: string
    icons: any
}
const CardDash: React.FC<CardDash> = ({ tittle, count, icons }) => {
    return (
        <div className="w-72 h-52 shadow-lg rounded-xl">
            <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
                <div>{tittle}</div>
                <div>
                    {icons}
                </div>
            </div>
            <div className="flex justify-center h-1/2 items-center">
                <span className="font-semibold text-2xl">
                    {count}
                </span>
            </div>
        </div>
    )
}

export default CardDash