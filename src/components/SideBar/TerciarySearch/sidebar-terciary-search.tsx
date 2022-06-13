import { DateInput } from ".";

export const SideBarTerciarySearch = () => {
    return (
        <div>
            <h4>Período de Publicação</h4>
            <div className="side-bar-date-group">
                <DateInput label="De" reference="stats_at" />
                <DateInput label="Até" reference="ends_at" />
            </div>
        </div>
    );
};
