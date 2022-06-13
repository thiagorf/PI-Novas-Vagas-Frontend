import { RiSearchLine } from "react-icons/ri";

export const SideBarSearchInput = () => {
    return (
        <div className="side-bar-input-wrapper">
            <input type="text" placeholder="Pesquise..." />
            <button className="search-input-button">
                <RiSearchLine size={16} />
            </button>
        </div>
    );
};
