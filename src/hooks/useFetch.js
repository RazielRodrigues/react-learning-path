import { useState, useEffect } from 'react';
export const useFetch = (url) => {

    // loading
    const [loading, setLoading] = useState(false);

    // get states
    const [data, setData] = useState(null);

    // post states
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callfetch, setCallFetch] = useState(null);

    // effect get
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json)
            setLoading(false);
        }

        fetchData();
    }, [url, callfetch])

    // set de config post
    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        setMethod(method)
    }

    // effect post
    useEffect(() => {

        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);
                const json = await res.json();

                setCallFetch(json);
            }
        }

        httpRequest();

    }, [config, method, url])

    return { data, httpConfig, loading };
}