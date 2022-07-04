import { Outlet } from "react-router-dom";
import { EnterpriseHeader } from "../components";
import { MainWrapper } from "../pages/Main";

export const SecuretedLayout = () => {
    return (
        <>
            <EnterpriseHeader />
            <>
                <Outlet />
            </>
        </>
    );
};
