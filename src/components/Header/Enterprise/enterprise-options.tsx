import { RiAddBoxLine, RiLogoutBoxLine, RiNewspaperLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { PopUpOption } from "../PopUp";
import { PopUp } from "../PopUp/popup";

export const EnterpriseOptions = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const enterpriseCreateJob = () => {
        navigate("/create-job");
    };

    const enterpriseJobs = () => {
        navigate("/enterprise-jobs");
    };

    const enterpriseLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <PopUp placeholder={user.name}>
            <PopUpOption action={enterpriseCreateJob} icon={<RiAddBoxLine />} message="Criar uma vaga" />
            <PopUpOption action={enterpriseJobs} icon={<RiNewspaperLine />} message="Vagas criadas" />
            <PopUpOption action={enterpriseLogout} icon={<RiLogoutBoxLine />} message="Sair" />
        </PopUp>
    );
};
