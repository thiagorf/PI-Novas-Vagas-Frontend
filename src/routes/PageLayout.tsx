import { Outlet } from "react-router-dom";
import { CommonHeader } from "../components/CommonHeader"

export const PageLayout = () => {
    return (
        <>
            <CommonHeader />
            <Outlet/>
        </>
    )
}