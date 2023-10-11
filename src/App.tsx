

import { ThreeDots } from "react-loader-spinner";
import './App.css';
import Cart from "./sections/Cart";
import Layout from "./sections/Layout";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Route, Routes } from "react-router-dom";
//import useDarkMode from "use-dark-mode";
import loading from "./components/Loading";
import { BackToTop, Nav, PopularProducts } from "./sections";


const App = () => {
   const isLoading = loading();
   // const darkMode = useDarkMode(false);
    //const darkMode = useDarkMode(false);

   const allRoutes = [
      { path: "/", component: <Layout /> },
      { path: "/products", component: <PopularProducts /> },
      { path: "/cart", component: <Cart /> },
      {path: "/", component:<BackToTop/>}
   ]
  return (
  <>
    {
           !isLoading ? (
              
  <NextThemesProvider attribute="class" defaultTheme="dark">
          <main>
                 <Nav />
                 <Routes>
                 {
                    allRoutes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component}/>
                     ))
                    }
                 </Routes>
               
                 </main> 
                 </NextThemesProvider>
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
