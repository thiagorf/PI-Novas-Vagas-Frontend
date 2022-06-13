import { SideBarPrimarySearch, SideBarSecondarySearch, SideBarTerciarySearch } from ".";
import "./style.css";

export const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar-content-wrapper">
                <SideBarPrimarySearch />
                <SideBarSecondarySearch />
                <SideBarTerciarySearch />
                <button className="side-bar-cta">Pesquisar</button>
            </div>
        </div>
    );
};
