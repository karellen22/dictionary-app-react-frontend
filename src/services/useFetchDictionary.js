import { useState, useEffect } from "react";

const useFetchDictionary = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }, 100);

        return () => abortCont.abort();
}, [url]);

return { data, isPending, error }
}

export default useFetchDictionary;