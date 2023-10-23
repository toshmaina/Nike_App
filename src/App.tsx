import { useTheme } from "@emotion/react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import './App.css';
import loading from "./components/Loading";
import { Prducts } from "./constants";
import { BackToTop, Nav, PopularProducts } from "./sections";
import Cart from "./sections/Cart";
import Layout from "./sections/Layout";

 export  type CartContextType = {
      removeItemFromCart: (id: number) => void;
      itemsInCart: Prducts[];
      totalItemsInCart: number;
      addItemIntoCart:({id,name,price,imgURL}:Prducts) => void;

  };
  export  const CartContext = createContext < null |  CartContextType> (null)

const App = () => {
   const isLoading = loading();
   const theme = useTheme();

   const allRoutes = [
      { path: "/", component: <Layout /> },
      { path: "/products", component: <PopularProducts /> },
      { path: "/cart", component: <Cart /> },
      {path: "/", component:<BackToTop/>}
   ]


const initItemsInCart:Array<Prducts> = []

  const [itemsInCart, setItemsInCart] = useState<Array<Prducts>>(initItemsInCart);
  
  const addItemIntoCart = ({ id, name, imgURL, price }: Prducts):void => {
    const item = {
      name: name,
      id: id,
      imgURL: imgURL,
      price: price
    }
    const itemAddedExist: Prducts | undefined  = itemsInCart.find(item => item.id === id);
 
    itemAddedExist ?? setItemsInCart(prev => [...prev, item]);
    !itemAddedExist &&   Swal.fire({
       title: ' success',
       text: 'Item added into cart!!',
      timer: 1500,
      icon: 'success',
      backdrop: true,
      background: theme === 'light' ? '#141728': '#fff',
    }
    );
     itemAddedExist && Swal.fire({
      title: 'Error',
      text: 'Item Already exists in the  cart!!',
      timer: 1500,
      icon:"error",
      backdrop: true,
      background: theme === 'light' ? '#141728': '#fff',
    }
    );

  }

  const removeItemFromCart = (id: number):void => {
  
    const filterItems:Array<Prducts> = itemsInCart.filter(item => item.id !== id);
    setItemsInCart([...filterItems]);
    Swal.fire({
       title: ' success',
       text: 'Item removed from cart!!',
      timer: 1000,
      icon: 'success',
      backdrop: true,
      background: theme === 'light' ? '#141728': '#fff',
    }
    );

  };
  const totalItemsInCart: number = itemsInCart.length;
  
  return (
  <>
    {
           !isLoading ? (
          <NextUIProvider>   
  <NextThemesProvider attribute="class" defaultTheme="dark">
                    <main>
                       <CartContext.Provider value={{addItemIntoCart,removeItemFromCart,itemsInCart,totalItemsInCart}}>
                 <Nav />
                 <Routes>
                 {
                    allRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component}/>
                     ))
                    }
                          </Routes>
                            </CartContext.Provider>
                    </main> 
                  
                 </NextThemesProvider>
                 </NextUIProvider> 
        ) : (
           <div id="spinner" className="flex items-center absolute top-0 right-0 justify-center w-full h-full bg-[#141728]">
        <ThreeDots 
          height="80"
          width="80" 
          radius="9"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          visible={true}
 />
    </div>
 )
}

   
   
</>

)



}

export default App;
