import { ContentList } from "../../components/Content";
import { SideBar } from "../../components/SideBar";
import { MainWrapper } from "./main-wrapper";

export const Main = () => {
    return (
        <MainWrapper>
            <SideBar />
            <ContentList />
        </MainWrapper>
    );
};
