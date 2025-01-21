import Logo2 from "../assets/Logo2.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-20 h-20 mx-2 " src={Logo2} alt="logo" />
            </div>

            <div className=" text-white m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaTwitterSquare />
                <FaInstagram />
            </div>
        </nav>
    );
};

export default Navbar;
