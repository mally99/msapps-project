import { useRef, useEffect } from "react";

type IUseFetch = {
    request?: () => Promise<any>;
    onSuccess?: Function;
    onFailure?: Function;
    dependencies?: any[];
};

export const useFetch = ({
    request,
    onSuccess = () => { },
    onFailure = () => { },
    dependencies = []
}: IUseFetch) => {
    const asyncLock = useRef(false);

    useEffect(() => {
        if (asyncLock.current) return;
        const fetch = async () => {
            try {
                asyncLock.current = true;
                const res = await Promise.all(request ? [request()] : []);
                onSuccess(res[0]);
            } catch (err) {
                onFailure(err);
            } finally {
                asyncLock.current = false;
            }
        };
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};