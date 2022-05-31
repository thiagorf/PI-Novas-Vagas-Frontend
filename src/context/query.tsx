import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface QueryProps {
    children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
