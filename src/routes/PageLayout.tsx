import { Outlet } from "react-router-dom";
import { CommonHeader } from "../components/Header/Applicant";

export const PageLayout = () => {
    return (
        <>
            <CommonHeader />
            <Outlet />
        </>
    );
};
