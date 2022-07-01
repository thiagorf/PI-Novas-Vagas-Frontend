import { SideBarSearchInput, SideBarSelect } from ".";
import "./style.css";

export const SideBarPrimarySearch = () => {
    return (
        <div className="sidebar-group" id="primary-group">
            <h4>Informaçoes da vaga</h4>
            <SideBarSearchInput />
            <SideBarSelect />
        </div>
    );
};
