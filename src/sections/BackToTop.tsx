import { useScrollTrigger } from "@mui/material";
import { VscChevronUp } from "react-icons/vsc";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";


  
const BackToTop = () => {
  const isScrolling = useScrollTrigger();

    return (
    <>
        {
         true &&
              <Fade right >
              <Link to="/">
 <div className=" w-[3rem] h-[3rem] hover:ring-slate-gray  fixed z-10   right-6  bottom-6  bg-coral-red flex items-center justify-center  border rounded  text-white">
                      <VscChevronUp />
                  </div>
              </Link>
                </Fade>
         
                
              
              
            }
          

  
     </>      
  );
}

export default BackToTop;
