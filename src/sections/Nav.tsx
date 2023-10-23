
import { Tooltip, useScrollTrigger } from '@mui/material';
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import { useTheme } from "next-themes";
import { useCallback, useContext, useMemo, useState } from 'react';
import { fromLatLng } from "react-geocode";
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartPlusFill, BsPinMapFill, BsSearch } from 'react-icons/bs';
import { Fade } from 'react-reveal';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../App';
import { getProducts } from '../api/axiosApi';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { Navlinks, navLinks } from '../constants';

const navigationLinks = await getProducts<Navlinks>("navLinks");

const Nav = () => {
 const [isToggled, setToggle] = useState(false)
  const { theme, setTheme } = useTheme(); 

  const [show, setShow] = useState<boolean>(false)

  const { totalItemsInCart: itemCount } = useContext(CartContext)!;
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
        background: theme === 'dark' ? '#141728' : '#fff',
        allowEnterKey: false,
        

        
      });

  };



  const getAddress =  () => {
    //     console.log(navigator.onLine);
    //     const place = navigator.onLine &&   navigator.geolocation.getCurrentPosition(position =>  [position.coords.latitude, position.coords.longitude] );
    // console.log(place);

    //     const results = await  
     fromLatLng(48.8583701, 2.2922926)
     .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      console.log(lat, lng);
    })
    .catch(console.error); 
    } 
  
  return (

    <>
  
  <section>
  <Fade up>
        <header  className={` mx-auto mb-2    sm:px-16 px-8 py-8 max-sm:py-5 ${isScrolling ? `fixed top-0 bg-header bg-center mt-0 mb-0 `:`absolute my-2`  }   z-10 w-full`}>
         
     
    <nav className='max-w-[1440px] my-0 mx-auto flex items-center justify-between  '>
              <a className="" href="/">
             
                   <img
        src={headerLogo}
        alt="nike logo"
        width={130}
              height={28} />

             
     
          

      </a>
    <ul className={`flex-1 flex items-center justify-evenly max-lg:hidden  font-montserrat leading-normal ${ !isScrolling ? `text-slate-gray`:`text-white`} dark:text-white` }>
        {
                navigationLinks.map(link => ( 
                  <li key={link.label}className='relative' >
                    <Link to={link.href} className= "after:absolute after:transition after:content-[''] after:xl:bg-white after:bg-coral-red   after:h-[3px] after:w-full after:rounded-md after:left-0 after:-bottom-1 after:opacity-0 after:hover:opacity-100">{link.label}</Link> 
                  </li>
          )
              )
           
 }
              </ul>
  
       
      
     
         
              {
                !show &&
                <div className="flex gap-10 justify-end m-5 p-2">
                    <Tooltip title="search" arrow>
                     <button type="button" onClick={showPopUp} className='text-white'>
                       <BsSearch/>  
                      </button>
                    </Tooltip>  
                       <button  className={`${!isScrolling && theme === 'light' ? 'text-purple-900 ': 'text-coral-red'  } relative `}>
                     <Link to="/cart" className={` ${itemCount ? 'after:absolute':'after:hidden'}    after:content-['6'] after:bottom-2.5 after:left-3  after:w-[24px]  after:bg-coral-red  after:rounded-full    flex items-center justify-center`}><BsFillCartPlusFill/> </Link> 
                    </button>
                    <Classic className={ `${!isScrolling && theme === 'light' ? 'text-purple-900': 'text-white'  } `} reversed toggled={isToggled} toggle={toggle} onToggle={changeTheme} /> 
                     <button onClick={getAddress} className={`${!isScrolling && theme === 'light' ? 'text-purple-900 ': 'text-white'  } `}>
                      <BsPinMapFill/>
                    </button>
                  
                     <button onClick={showButton} className='hidden max-lg:block bg-white '>
                      <img src={hamburger} alt="toggle links" className='bg-white flex-1' width={25} height={25} />
                    </button>
                   
          </div> 
     }
              
  
        
    
 

     
            </nav>
                    
      
   
          </header>
            </Fade> 
           
      {
          show && (
           
            
        
            
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
              </Fade> 

            )
              } 
     
  </section>

      <Outlet /> 
     </>   
)
}


  


export default Nav;

