import Logo2 from "../assets/Logo2.png";
import { FaLinkedin, FaGithub, FaFacebook , FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-20 h-20 mx-2 " src={Logo2} alt="logo" />
            </div>

            <div className=" text-white m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/samuel-sinat-18a640204/"><FaLinkedin /> </a> 
                <a href="https://github.com/SamuelSinat11"><FaGithub /> </a>
                <a href="https://www.facebook.com/share/17SDzDr4EA/?mibextid=wwXIfr"> <FaFacebook  /> </a>
                <a href="https://www.instagram.com/ed_samuel10/"> <FaInstagram /> </a>
            </div>
        </nav>
    );
};

export default Navbar;
