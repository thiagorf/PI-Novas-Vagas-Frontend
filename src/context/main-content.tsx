import { createContext, ReactNode, useState } from "react";
import { QueryStringOptions } from "../components/SideBar/types";

export interface MainContentContextValues {
    queryString: QueryStringOptions;
    setQueryString: React.Dispatch<React.SetStateAction<QueryStringOptions>>;
}

export const MainContentContext = createContext({} as MainContentContextValues);

export const MainContentProvider = ({ children }: { children: ReactNode }) => {
    const [queryString, setQueryString] = useState<QueryStringOptions>({
        q: null,
        address: null,
        salary: null,
        // eslint-disable-next-line camelcase
        start_at: null,
        // eslint-disable-next-line camelcase
        ends_at: null,
    });

    return (
        <MainContentContext.Provider value={{ queryString, setQueryString }}>{children}</MainContentContext.Provider>
    );
};
