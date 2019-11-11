import * as React from "react";
import "./styles.scss";
import { 
    FaTwitter, 
    FaFacebook, 
    FaYoutube, 
    FaInstagram,
    FaRegCopyright
} from "react-icons/fa";

export const Footer: React.FC<{}> = () => (
    <footer>
        <div className="sn">
            <span>Follow us</span>
            <ul>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
            </ul>
        </div>
        <span><FaRegCopyright /> 2019 Social. Free Society, Better Humanity.</span>
    </footer>
);