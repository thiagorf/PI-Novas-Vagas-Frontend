import { ContentList } from "../../components/Content";
import { SideBar } from "../../components/SideBar";
import { MainContentProvider } from "../../context/main-content";

export const Main = () => {
    return (
        <MainContentProvider>
            <SideBar />
            <ContentList />
        </MainContentProvider>
    );
};
