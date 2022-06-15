import { RiSearchLine } from "react-icons/ri";
import "./style.css";

export const SideBarSearchInput = () => {
    return (
        <div className="sidebar-input-wrapper">
            <input type="text" placeholder="Pesquise..." />
            <button className="search-input-button">
                <RiSearchLine size={16} />
            </button>
        </div>
    );
};
