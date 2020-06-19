// Use a CDN script inside a component
// See https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
import { useEffect } from 'react';

const useScript = url => {
    useEffect(_ => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return _ => document.body.removeChild(script);
    }, [url]);
};

export default useScript;