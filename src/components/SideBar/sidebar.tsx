import { SideBarPrimarySearch, SideBarSecondarySearch, SideBarTerciarySearch, SideBarWrapper } from ".";
import "./style.css";

export const SideBar = () => {
    return (
        <SideBarWrapper>
            <SideBarPrimarySearch />
            <SideBarSecondarySearch />
            <SideBarTerciarySearch />
            <button className="sidebar-cta">Pesquisar</button>
        </SideBarWrapper>
    );
};
