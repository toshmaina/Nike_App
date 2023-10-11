
import { components } from "../constants";



const Layout = () => {



  return (
   
     
        
   

<div>                 
      {
     components.map((component) => (
     component.element
))
     }
                     
</div>
   
  );
}

export default Layout;
