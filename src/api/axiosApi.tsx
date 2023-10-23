import axios from "axios";
import { Prducts } from "../constants";

const productsApi = axios.create({
    baseURL: "http://localhost:3500/",
    headers: {
                "Content-type": "application/json"
            },
});

//type returnType = Array<Prducts> | string | boolean;
/* interface returnType {
    response: Array<Prducts>;
    isLoading: boolean;
    error: string;
} */


//implement generics for the dynamic types allocations


export async function getProducts <T> (urlEndPoint: string):Promise<Array<T>> {
/* const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string>(""); */
    const response:Array<T> = await productsApi.get(urlEndPoint)
        .then(response => response.data)
        .catch(error => error instanceof Error && console.log(error.message)
    )
  /*  !error &&  setIsLoading(false); */
    return response;
};
   

type GetProducts = Awaited<ReturnType < typeof getProducts >>
    

export const postProducts = async (product:Prducts,urlEndPoint:string) => {
    const response = await productsApi.post(urlEndPoint, product);
    

    
}


export const updateProducts = async () => {
    

    
}

export const deleteProducts = async () => {
    

    
}

export const replaceProducts = async () => {
    

    
}



























export default productsApi;