import { useState, useEffect } from 'react';
export const useFetch = (url) => {

    // get states
    const [data, setData] = useState(null);

    // post states
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callfetch, setCallFetch] = useState(null);

    // effect get
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json)
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

    return { data, httpConfig };
}