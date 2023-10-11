import { Link } from "react-router-dom";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";


const Footer = () => {
  return (

/* 
      <Wave fill='#f79902'
        paused={false}
     
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.15,
          points: 3
        }}
  > */
      
  <section className=' bg-footer bg-cover bg-center bg-no-repeat sm:px-16 px-8 pb-8 sm:pt-24 pt-12' id='contact-us'>
      
    
    <footer className=" max-w-[1440px] my-0 mx-auto">
      <div className="flex flex-1 items-start justify-between gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer Logo " className="ogject-contain" width={150} height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat text-white-400 sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike store .Find Your perfect Size In the Store . Get Rewards </p>
              <div className="flex flex-1 items-center mt-8 gap-5 ">
        {socialMedia.map(icon => (
          <div key={icon.src} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </div>
         
        ))}
      </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(footLink => (
            <div key={footLink.title} className="text-white ">
              <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6 ">{footLink.title}</h4>
           <ul>   
              {footLink.links.map(link => (
                
                <li key={link.name} className="text-white mt-3  font-medium leading-normal font-montserrat text-base hover:text-slate-gray cursor-pointer ">
                  <Link to={link.link}>{link.name}</Link>
                </li>
               
               
              )
                )}
                 </ul>
            </div>
            
          ))}
        </div>
       
  
      </div>
      </footer>
       </section>
/*   </Wave> */
    
  );   
}

export default Footer;
