import { useScrollTrigger } from '@mui/material';
import { Classic } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useCallback, useMemo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Fade } from 'react-reveal';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
 const [isToggled, setToggle] = useState(false)
  const { theme, setTheme } = useTheme(); 


console.log(theme);

  
 const [show, setShow] = useState<boolean>(false)


 const showButton = useCallback(() => {
   setShow(show => !show)
 }, [show]);

  const isScrolling: boolean = useScrollTrigger();
  
  useMemo(() => isScrolling, []);
  const toggle = ():void => setToggle(toggle => !toggle); 

  const changeTheme = (): void => theme === 'light' ? setTheme("dark") : setTheme("light");
  


  const showPopUp = (): void => {
    
    Swal.fire(
      {
        
        width: '80%',
        input: 'text',
        position: "top", 
        grow: 'row',
        showConfirmButton: false,
        background: theme === 'dark' ? '#141728': '#fff',
        allowEnterKey: false,
        

        
      });

  }
  const LoopLinks = () => (
     <div className=" min-w-[30%] mr-0  top-0 right-0 bg-footer fixed my-0 backdrop:shadow-black   z-10   h-screen   ">
                         <div className="flex gap-10 justify-start m-5 p-2 ">
            <button onClick={showButton} className='hidden max-lg:block w-16 h-16 '>
             <AiOutlineClose/>
                  </button>
                
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
    
  )
//   const showSideBar = () => { 
// console.log((<LoopLinks/>));

//     const sidebar = <LoopLinks />;
//     const bar =  navLinks.map(link => (
            
//                     <Link key={link.label} to={link.href}>
//                   <li >
//                  {link.label}
//                  </li>
//                     </Link>
        
//           )
//           )
//     Swal.fire(
//       {
        
//         width: '80%',
//         html: `
//            <ul className=''>   
//            <a href='/'><li>Home</li></a>     
//            <a><li>About</li>       
//            <a><li>Products</li>       
//            <a><li>Contact</li>       
 
//       </ul>`
//         ,
//         position:"top-right",  
//         grow: 'column',
//         showConfirmButton: false,
//         background: theme === 'dark' ? '#141728': '#fff',
//         allowEnterKey: false,
//         heightAuto:false,
        
        
        
//         customClass: {
//           closeButton: 'text-coral-red  ', 
//           htmlContainer: 'flex align-center flex-col  justify-between  mt-0 p-3 ',
//           title:'hidden'
//         } 
        

        
//       });

//   }

  
  return (

/* 
     html:
          <div className=" min-w-[30%] mr-0  top-0 right-0 bg-footer fixed my-0 backdrop:shadow-slate-gray   z-10   h-screen   ">
                         <div className="flex gap-10 justify-start m-5 p-2 ">
            <button onClick={showButton} className='hidden max-lg:block w-16 h-16 '>
             <AiOutlineClose/>
                  </button>
                
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
       , */
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
                     <button type="button" onClick={showPopUp} className='text-white'>
                       <BsSearch/>  
                    </button>
                    <Classic toggled={isToggled} toggle={toggle} onToggle={changeTheme}  />
                     <button onClick={showButton} className='hidden max-sm:block  max-lg:block bg-white '>
                      <img src={hamburger} alt="toggle links" className='bg-white flex-1' width={25} height={25} />
                    </button>          
          </div> 
     }
              
  
        
    
 

     
            </nav>
                    
      
   
          </header>
            </Fade> 
           
      {
          show && (
              <></>
            
            /*
            
<Fade  right={show}  >
              

              <div className=" min-w-[30%] mr-0  top-0 right-0 bg-footer fixed my-0 backdrop:shadow-slate-gray   z-10   h-screen   ">
                         <div className="flex gap-10 justify-start m-5 p-2 ">
            <button onClick={showButton} className='hidden max-lg:block w-16 h-16 '>
             <AiOutlineClose/>
                  </button>
                
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
              </Fade> */

            )
              } 
     
  </section>

      <Outlet /> 
     </>   
)
}


  


export default Nav;

