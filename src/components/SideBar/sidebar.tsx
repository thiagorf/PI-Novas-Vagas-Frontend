import { SideBarPrimarySearch, SideBarSecondarySearch, SideBarTerciarySearch, SideBarWrapper } from ".";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { QueryStringOptions } from "./types";
import { JobsData } from "../../types";
import { useGetJobs } from "../../hooks/useGetJobs";
import "./style.css";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useToggle } from "../../hooks";

export const SideBar = () => {
    const { toggle, handleToggle } = useToggle();
    const {
        contentContext: { setQueryString },
    } = useGetJobs<JobsData[], Error>();

    const { width } = useWindowDimensions();

    const methods = useForm<QueryStringOptions>({
        defaultValues: {
            q: null,
            address: null,
            salary: null,
            // eslint-disable-next-line camelcase
            start_at: null,
            // eslint-disable-next-line camelcase
            ends_at: null,
        },
    });

    const filterContent: SubmitHandler<QueryStringOptions> = (data) => {
        setQueryString(data);
    };

    return (
        <SideBarWrapper>
            {width < 1200 && (
                <button onClick={handleToggle} className="filter-button">
                    Mostrar Filtro
                </button>
            )}

            {(width > 1200 || toggle) && (
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(filterContent)}>
                        <SideBarPrimarySearch />
                        <SideBarSecondarySearch />
                        <SideBarTerciarySearch />
                        <button type="submit" className="sidebar-cta">
                            Pesquisar
                        </button>
                    </form>
                </FormProvider>
            )}
        </SideBarWrapper>
    );
};
