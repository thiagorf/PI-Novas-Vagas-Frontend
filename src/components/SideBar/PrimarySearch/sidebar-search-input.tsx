import { useFormContext } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import { QQuery } from "../types";

export const SideBarSearchInput = () => {
    const { register } = useFormContext<QQuery>();

    return (
        <div className="sidebar-input-wrapper">
            <input type="text" placeholder="Pesquise..." {...register("q")} />
            <button className="search-input-button">
                <RiSearchLine size={16} />
            </button>
        </div>
    );
};
