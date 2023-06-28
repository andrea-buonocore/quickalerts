import { useNavigate } from "react-router-dom";
import bg_video from "../video/bg_video.mp4"

const Welcome = () => {

    const navigate = useNavigate()

    return (
        <div className="w-full h-screen relative">
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={bg_video} type="video/mp4" />
            </video>
            <div className="fixed top-0 left-0 h-screen w-full bg-black/80 flex z-20 flex-col items-center justify-center text-white">
                <h1 className="text-6xl mb-4 font-semibold">QuickAlerts</h1>
                <span className="font-light mb-4">Stay Informed, Stay Ahead</span>
                <button className="border rounded-lg p-3 text-sm dark:bg-gray-800 dark:text-gray-100 dark:border-none" onClick={() => { navigate('/home') }}>Unlock the power of information</button>
            </div>


        </div>
    )
}

export default Welcome;