import human from '../assets/human.png'
const CardWelcome = () => {
    return (
        <div className="bg-[#D3FCD2]">
            <div className="flex">
                <div className="w-1/2">
                    <div>
                        Welcome back 👋
                        Jaydon Frankie
                    </div>
                    <div>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                    </div>
                    <div>
                        <button>
                            Go Now
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <img src={human} className='w-auto' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWelcome