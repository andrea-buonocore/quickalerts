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
            <nav className={nav ? "fixed top-0 right-0 bg-white border w-[70%] lg:w-[30%] h-screen p-10 z-10 duration-500" : "fixed top-0 right-[-100%] bg-white border w-[70%] lg:w-[30%] h-screen p-10 z-10  duration-500"}>
                <div className="flex justify-end">
                    <AiOutlineClose size={20} className="mb-5 cursor-pointer" onClick={handleNav} />
                </div>
                <div className="flex items-center mb-4 p-5">
                    <AiOutlineHeart size={20} className="mr-3" />
                    <p className="text-black z-10">Saved</p>
                </div>
                <div className="flex items-center mb-4 p-5">
                    <BiCategoryAlt size={20} className="mr-3" />
                    <span className="text-black z-10">Change Category</span>
                </div>
                <div className="flex items-center mb-4 p-5">
                    <GrLanguage size={20} className="mr-3" />
                    <span className="text-black z-10">Change Language</span>
                </div>
            </nav>
        </div>
    )
}

export default Header;