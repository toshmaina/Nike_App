

import {
  CustomersReviews,
  Footer, Hero,
  Products,
  Services,
  SpecialOffer,
  Subscribe, SuperQuality
} from "../sections";


interface Components {
    path: string;
    element: JSX.Element;
}
 export const   components:Components[] = [
    {
        path: "hero",
        element: <Hero />
    },{
        path: "products",
        element: <Products/>
    },{
        path: "superQuality",
        element: <SuperQuality />
    },
     {
        path: "specialOffers",
        element:<SpecialOffer/>
    },  {
        path: "services",
        element: <Services/>
    },{
        path: "customersReviews",
        element: <CustomersReviews/>
    },
    {
        path: "subscribe",
        element: <Subscribe/>
    },{
        path: "footer",
        element: <Footer/>
    }]

const Layout = () =>  (
<>                 
      {
     components.map((component) => (
     component.element
))
     }
                     
</>
   
  );


export default Layout;
