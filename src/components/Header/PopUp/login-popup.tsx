import { useToggle } from "../../../hooks";
import { PopUpOption } from "./popup-option";
import { RiUser3Line, RiBuilding4Line } from "react-icons/ri";
import "./style.css";

export const LoginPopUp = () => {
    const { toggle, handleToggle } = useToggle();

    return (
        <div className="popup-wrapper">
            <div id="popup-cta" onClick={handleToggle}>
                Login
            </div>
            {toggle && (
                <div className="popup">
                    <PopUpOption icon={<RiUser3Line />} path="/applicant-login" message="Login como candidato" />
                    <PopUpOption icon={<RiBuilding4Line />} path="/enterprise-login" message="Login como empresa" />
                </div>
            )}
        </div>
    );
};
