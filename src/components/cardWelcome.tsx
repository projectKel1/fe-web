import human from '../assets/human.png'
import Cookies from 'js-cookie'
const CardWelcome = () => {
    const role = Cookies.get('role')
    return (
        <div className="bg-[#dcf4e6] shadow-lg rounded-xl p-4">
            <div className="flex">
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <div className='py-6 text-[#004B50] text-lg lg:text-2xl md:text-2xl font-semibold'>
                        <h1>
                            Welcome back 👋
                        </h1>
                        <h1>
                            {role}
                        </h1>
                    </div>
                    <div>
                        <p className='text-[#004B50] font-normal text-sm lg:text-lg md:text-lg'>
                            Explore the menu on the left to access various features and available reports. We hope you have a productive and informative experience on this Dashboard.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 flex  justify-end items-center">
                    <div>
                        <img src={human} className='hidden md:block lg:block w-56' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWelcome