import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-10 bg-transparent">
            <span className=" font-semibold text-2xl">QuickAlerts</span>
            <AiOutlineMenu size={20} className="cursor-pointer"/>
        </div>
    )
}

export default Header;