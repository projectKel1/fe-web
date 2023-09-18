import human from '../assets/human.png'
const CardWelcome = () => {
    return (
        <div className="bg-[#dcf4e6] shadow-lg rounded-xl p-4">
            <div className="flex">
                <div className="w-1/2">
                    <div className='py-6 text-[#004B50] text-2xl font-semibold'>
                        <h1>
                            Welcome back 👋
                        </h1>
                        <h1>
                            Jaydon Frankie
                        </h1>
                    </div>
                    <div>
                        <p className='text-[#004B50] font-normal text-lg'>
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div>
                        <img src={human} className='w-56' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWelcome