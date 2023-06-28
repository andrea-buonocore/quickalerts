import { AiOutlineMenu, AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => { setNav(!nav) };

    return (
        <div className="flex justify-between items-center p-10 relative">
            <Link to={'/home'}>
                <span className="font-semibold text-3xl">QuickAlerts</span>
            </Link>
            <AiOutlineMenu size={20} className="cursor-pointer" onClick={handleNav} />
            <nav className={nav ? "fixed top-0 right-0 w-[70%] lg:w-[20%] bg-white border h-screen z-10 transition-all duration-500 flex flex-col justify-center" : "fixed top-0 right-[-100%] border bg-white w-[70%] lg:w-[20%] h-screen p-10 z-10 transition-all duration-500 flex flex-col justify-center"}>
                <div className="absolute top-0 right-0 mb-5 p-10">
                    <AiOutlineClose size={20} className="cursor-pointer" onClick={handleNav} />
                </div>
                <Link to={'/saved'} onClick={handleNav}>
                    <div className="flex items-center py-10 justify-center">
                        <AiOutlineHeart size={20} className="mr-3" />
                        <span className="text-black z-10">Saved</span>
                    </div>
                </Link>
                <Link to={'/settings'} onClick={handleNav}>
                    <div className="flex py-10 items-center justify-center">
                        <AiOutlineSetting size={20} className="mr-3" />
                        <span className="text-black z-10">Settings</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header;