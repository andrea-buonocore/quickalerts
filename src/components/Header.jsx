import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => { setSidebar(!sidebar) }

    return (
        <div className="flex justify-between items-center p-10 bg-transparent relative">
            <Link to={'/'}>
                <span className="font-semibold text-2xl">QuickAlerts</span>
            </Link>
            <AiOutlineMenu size={20} className="cursor-pointer" onClick={() => { showSidebar() }} />
            {
                sidebar && (
                    <Sidebar />
                )
            }
        </div>
    )
}

export default Header;