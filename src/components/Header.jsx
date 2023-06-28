import { AiOutlineMenu, AiOutlineSetting, AiOutlineClose, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => { setNav(!nav) };

    return (
        <div className="flex justify-between items-center p-10 bg-transparent relative">
            <Link to={'/'}>
                <span className="font-semibold text-2xl">QuickAlerts</span>
            </Link>
            <AiOutlineMenu size={20} className="cursor-pointer" onClick={handleNav} />
            <nav className={nav ? "fixed top-0 right-0 bg-white border w-[70%] lg:w-[20%] h-screen z-10 transition-all duration-500 flex flex-col justify-center" : "fixed top-0 right-[-100%] bg-white border w-[70%] lg:w-[20%] h-screen p-10 z-10 transition-all duration-500 flex flex-col justify-center"}>
                <div className="absolute top-0 right-0 mb-5 p-10">
                    <AiOutlineClose size={20} className="cursor-pointer" onClick={handleNav} />
                </div>
                <Link to={'/saved'} onClick={handleNav}>
                    <div className="flex items-center py-10 border flex items-center justify-center">
                        <AiOutlineHeart size={20} className="mr-3" />
                        <span className="text-black z-10">Saved</span>
                    </div>
                </Link>
                <Link to={'/settings'} onClick={handleNav}>
                    <div className="flex items-center py-10 border flex items-center justify-center">
                        <AiOutlineSetting size={20} className="mr-3" />
                        <span className="text-black z-10">Settings</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header;