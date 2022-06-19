import { ContentList } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

export function Main() {
    return (
        <div className="content-wrapper">
            <SideBar />
            <ContentList />
        </div>
    );
}
