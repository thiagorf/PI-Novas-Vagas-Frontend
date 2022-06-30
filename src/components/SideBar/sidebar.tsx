import { SideBarPrimarySearch, SideBarSecondarySearch, SideBarTerciarySearch, SideBarWrapper } from ".";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { QueryStringOptions } from "./types";
import { JobsData } from "../../types";
import { useGetJobs } from "../../hooks/useGetJobs";
import "./style.css";

export const SideBar = () => {
    const {
        contentContext: { setQueryString },
    } = useGetJobs<JobsData[], Error>();

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
        </SideBarWrapper>
    );
};
