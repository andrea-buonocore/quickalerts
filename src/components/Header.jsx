import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
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
            <nav className={nav ? "fixed top-0 right-0 bg-white border w-[70%] lg:w-[30%] h-screen z-10 transition-all duration-500" : "fixed top-0 right-[-100%] bg-white border w-[70%] lg:w-[30%] h-screen p-10 z-10 transition-all duration-500"}>
                <div className="flex justify-end items-center mb-5 p-10">
                    <AiOutlineClose size={20} className="cursor-pointer" onClick={handleNav} />
                </div>
                <Link to={'/saved'}>
                    <div className="flex items-center mb-4 p-5">
                        <AiOutlineHeart size={20} className="mr-3" />
                        <span className="text-black z-10 font-semibold">Saved</span>
                    </div>
                </Link>
                <Link to={'/category'}>
                    <div className="flex items-center mb-4 p-5">
                        <BiCategoryAlt size={20} className="mr-3" />
                        <span className="text-black z-10 font-semibold">Change Category</span>
                    </div>
                </Link>
                <Link to={'/lang'}>
                    <div className="flex items-center mb-4 p-5">
                        <GrLanguage size={20} className="mr-3" />
                        <span className="text-black z-10 font-semibold">Change Language</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header;