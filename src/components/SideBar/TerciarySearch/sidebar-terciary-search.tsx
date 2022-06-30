import { useFormContext } from "react-hook-form";
import { DateRangeQuery } from "../types";
import "./style.css";

export const SideBarTerciarySearch = () => {
    const { register } = useFormContext<DateRangeQuery>();

    return (
        <div className="sidebar-group">
            <h4>Período de Publicação</h4>
            <div className="sidebar-date-group">
                <div className="sidebar-date-input">
                    <label htmlFor="start_at">De</label>
                    <input type="date" name="date" id="start_at" {...register("start_at")} />
                </div>

                <div className="sidebar-date-input">
                    <label htmlFor="ends_at">Até</label>
                    <input type="date" name="date" id="ends_at" {...register("ends_at")} />
                </div>
            </div>
        </div>
    );
};
