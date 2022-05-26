import { Method } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

interface UseAsyncRequiredData<T> {
    payload?: T;
    method: Method;
    url: string;
}

export const useAsync = <T>({ method, payload, url }: UseAsyncRequiredData<T>) => {
    const [data, setData] = useState<T>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await api.request({
                    data: payload,
                    method: method,
                    url,
                });

                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(true);
            }
        })();
    }, []);

    return { data, error, loading };
};
