import { ContentList } from "../../components/Content";
import { Nav } from "../../components/Nav";

export function Main() {
    return (
        <div className="content-wrapper">
            <Nav />
            <ContentList />
        </div>
    );
}
