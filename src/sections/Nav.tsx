import { useScrollTrigger } from '@mui/material';

import { BsSearch } from 'react-icons/bs';

import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useCallback, useMemo, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
const Nav = () => {
 const [isToggled, setToggle] = useState(false)
  const { theme, setTheme } = useTheme(); 
const [showSearchInput, setShowSearchInput] = useState(false);

console.log(theme);

  
 const [show, setShow] = useState<boolean>(false)


 const showButton = useCallback(() => {
   setShow(show => !show)
 }, [show]);

  const isScrolling: boolean = useScrollTrigger();
  
  useMemo(() => isScrolling, []);
  const toggle = ():void => setToggle(toggle => !toggle); 

  const changeTheme = (): void => theme === 'light' ? setTheme("dark") : setTheme("light");
  
  const showPopUp = () =>  Swal.fire("Success!", "Item removed  from cart!");
  return (
    <>
  
  <section>
  <Fade up>
        <header  className={` mx-auto mb-2    sm:px-16 px-8 py-8 max-sm:py-5 ${isScrolling ? `fixed top-0 bg-header bg-center mt-0 mb-0 `:`absolute my-2`  }   z-10 w-full`}>
          {/*  */}{/* <video
            src="https://www.canva.com/design/DAFuON-dRqQ/qsLA-qtSSFv_8caljpN2TA/watch?utm_content=DAFuON-dRqQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            width={1920} height={1080} className="  sm:px-16 px-8 py-4 max-sm:py-0 flex justify-center absolute items-center-mx-0 mx-2 container" />   */}
     
    <nav className='max-w-[1440px] my-0 mx-auto flex items-center justify-between  '>
      <a   className="" href="/">
      <img
        src={headerLogo}
        alt="nike logo"
        width={130}
              height={28} />
          

      </a>
    <ul className={`flex-1 flex items-center justify-evenly max-lg:hidden  font-montserrat leading-normal ${ !isScrolling ? `text-slate-gray`:`text-white`} dark:text-white` }>
        {
                navLinks.map(link => ( 
                  <li key={link.label}>
                    <Link to={link.href} >{link.label}</Link> 
                  </li>
          )
              )
           
 }
              </ul>
  
       
      
     
         
              {
                !show &&
 <div className="flex gap-10 justify-end m-5 p-2">
            <button onClick={showButton} className='hidden   max-lg:block'>
                      <img src={hamburger} alt="toggle links" className='dark:bg-white' width={25} height={25} />
                    </button>

                    <Classic duration={750} toggled={isToggled} toggle={toggle} onToggle={changeTheme} />
                    <button type="button" onClick={() => {
                      setShowSearchInput(prev => !prev);
                      showSearchInput && showPopUp();
                    }}>
                       <BsSearch/>  
                    </button>
                    

                      
                     
                    
                  
            
    
                   
          </div> 
     }
              
  
        
    
 

     
            </nav>
                    
      
   
          </header>
            </Fade> 
           
      {
            show &&   (
<Fade  right={show}  >
              

              <div className=" min-w-[25%] mr-0  top-0 right-0 bg-footer fixed my-0    z-10   h-screen   ">
                         <div className="flex gap-10 justify-start m-5 p-2 ">
            <button onClick={showButton} className='hidden max-lg:block w-16 h-16 '>
             <AiOutlineClose/>
                  </button>
                  <Classic    duration={750}  toggled={isToggled}    toggle={toggle} onToggle={changeTheme } />
          </div>
            
                <ul className='relative w-full last-of-type:  text-md flex flex-col items-center justify-start p-5  gap-24   font-montserrat text-[whitesmoke]  '>
             
                  
      {
                  navLinks.map(link => (
            
                    <Link key={link.label} to={link.href}>
                  <li >
                 {link.label}
                 </li>
                    </Link>
        
          )
          )
 }
      </ul>

              </div>
              </Fade>

            )
              } 
     
  </section>

      <Outlet /> 
     </>   
)
}


  


export default Nav;

