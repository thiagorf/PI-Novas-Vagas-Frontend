import { RiNewspaperLine, RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { PopUpOption } from "../PopUp";
import { PopUp } from "../PopUp/popup";

export const ApplicantOptions = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const applicantJobs = () => {
        navigate("/applied-jobs");
    };

    const applicantLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <PopUp placeholder={user.name}>
            <PopUpOption action={applicantJobs} icon={<RiNewspaperLine />} message="Minhas vagas" />
            <PopUpOption action={applicantLogout} icon={<RiLogoutBoxLine />} message="Sair" />
        </PopUp>
    );
};
