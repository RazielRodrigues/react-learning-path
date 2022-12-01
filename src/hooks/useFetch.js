import { useState, useEffect } from 'react';
export const useFetch = (url) => {

    // deletar
    const [itemId, setItemId] = useState();

    // loading
    const [erros, setErros] = useState(null);

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

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
            } catch (error) {
                setErros('Houve erro na requisição')
            }

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

        if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setItemId(data)
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

            if (method === 'DELETE') {
                let deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);
                const json = await res.json();

                setCallFetch(json);
            }
        }

        httpRequest();

    }, [config, method, url])

    return { data, httpConfig, loading, erros };
}