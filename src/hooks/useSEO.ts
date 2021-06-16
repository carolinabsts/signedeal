import { useEffect, useRef } from "react"

export const useSEO = (description: string, title?: string) => {
    const prevTitle = useRef(document.title);
    const prevDescription: any = useRef(document.querySelector('meta[name="description"]')?.getAttribute('content'));
    
    useEffect(() => {
        const previousTitle = prevTitle.current;
        if (title) {
            document.title = `${title}`;
        };
        return () => {
            document.title = previousTitle;
        }
    }, [title]);

    useEffect(() => {
        const metaDataDescription = document.querySelector('meta[name="description"]');
        const previousDescription = prevDescription.current;
        if (description) {
            metaDataDescription?.setAttribute('content', description);
        };
        return () =>  metaDataDescription?.setAttribute('content', previousDescription);
    }, [description]);
}