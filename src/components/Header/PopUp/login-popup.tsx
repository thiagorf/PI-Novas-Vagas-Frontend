import { PopUpOption } from "./popup-option";
import { RiUser3Line, RiBuilding4Line } from "react-icons/ri";
import { PopUp } from "./popup";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const LoginPopUp = () => {
    const navigate = useNavigate();

    const applicantLogin = () => {
        navigate("/applicant-login");
    };

    const enterpriseLogin = () => {
        navigate("/enterprise-login");
    };

    return (
        <PopUp placeholder="Login">
            <PopUpOption icon={<RiUser3Line />} action={applicantLogin} message="Login como candidato" />
            <PopUpOption icon={<RiBuilding4Line />} action={enterpriseLogin} message="Login como empresa" />
        </PopUp>
    );
};
