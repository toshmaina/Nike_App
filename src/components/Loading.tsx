import { useEffect, useState } from "react";

const loading = () => {
    const [isLoading, setIsLoading] = useState(true);
  /*  useDebounce(() => setIsLoading(isLoading  => !isLoading),250) */
    useEffect(() => { 
    const timeOut = setTimeout(() => setIsLoading((isLoading) => !isLoading), 250);
    return () => clearTimeout(timeOut) 
   }, []); 
    return isLoading;
}

export default loading;
