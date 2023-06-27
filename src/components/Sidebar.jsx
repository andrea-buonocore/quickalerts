import { AiOutlineHeart } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {

    return (
        <nav className="absolute top-0 right-0 bg-white border w-[70%] lg:w-[30%] h-screen p-10 z-10">
            <div className="flex justify-end">
                <AiOutlineClose size={20} className="mb-5 cursor-pointer"/>
            </div>
            <div className="flex items-center mb-4 border p-5">
                <AiOutlineHeart size={20} className="mr-3" />
                <p className="text-black z-10">Saved</p>
            </div>
            <div className="flex items-center mb-4 border p-5">
                <BiCategoryAlt size={20} className="mr-3" />
                <span className="text-black z-10">Change Category</span>
            </div>
            <div className="flex items-center mb-4 border p-5">
                <GrLanguage size={20} className="mr-3" />
                <span className="text-black z-10">Change Language</span>
            </div>
        </nav>
    )
}

export default Sidebar;