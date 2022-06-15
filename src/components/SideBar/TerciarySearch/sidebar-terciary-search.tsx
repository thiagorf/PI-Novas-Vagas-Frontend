import { DateInput } from ".";
import "./style.css";

export const SideBarTerciarySearch = () => {
    return (
        <div className="sidebar-group">
            <h4>Período de Publicação</h4>
            <div className="sidebar-date-group">
                <DateInput label="De" reference="stats_at" />
                <DateInput label="Até" reference="ends_at" />
            </div>
        </div>
    );
};
