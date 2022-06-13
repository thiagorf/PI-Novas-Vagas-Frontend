import { SideBarPrimarySearch, SideBarSecondarySearch, SideBarTerciarySearch } from ".";
import "./style.css";

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content-wrapper">
                <SideBarPrimarySearch />
                <SideBarSecondarySearch />
                <SideBarTerciarySearch />
                <button className="sidebar-cta">Pesquisar</button>
            </div>
        </div>
    );
};
