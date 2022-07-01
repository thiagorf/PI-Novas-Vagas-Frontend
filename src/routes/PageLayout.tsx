import { Outlet } from "react-router-dom";
import { CommonHeader } from "../components/Header/Applicant";
import { MainWrapper } from "../pages/Main";

export const PageLayout = () => {
    return (
        <>
            <CommonHeader />
            <>
                <Outlet />
            </>
        </>
    );
};
