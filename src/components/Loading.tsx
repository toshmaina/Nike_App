import { useEffect, useState } from "react";

const loading = (delay:number) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => { 
    const timeOut = setTimeout(() => setIsLoading((isLoading) => !isLoading), delay);
    return () => clearTimeout(timeOut) 
   }, []); 
    return isLoading;
}

export default loading;
