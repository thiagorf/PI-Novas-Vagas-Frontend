import { ContentList } from "../../components/Content";
import { Nav } from "../../components/Nav";
import { SideBar } from "../../components/SideBar";

export function Main() {
    return (
        <div className="content-wrapper">
            <SideBar />
            <ContentList />
        </div>
    );
}
