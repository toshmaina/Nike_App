
import { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Typed from 'react-typed';
import { getProducts } from "../api/axiosApi";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { Stat, shoes } from "../constants";


const statistics = await getProducts<Stat>("statistics"); 

const Hero = () => {
  const [image, setimage] = useState<string>(bigShoe1);
  const [showBorder, setshowBorder] = useState<boolean>(false);
  const handleChange = (src: string) => {
    image !== src ? setimage(src) :  setshowBorder(true);
  }

 
  return (
     <section  className='  relative  sm:pl-16 pl-8   sm:pr-16 pr-8   sm:pb-24 pb-12'  id='home'>
 <Fade up  >
      
          <section className="w-full max-w-[1440px]   mx-0 my-auto     flex flex-col max-sm:justify-center  min-h-screen xl:flex-row  gap-10  ">
      <div className="flex flex-col pt-28    items-start justify-center max-xl:w-2/5 sm:px-16  px-8 max-sm:w-[32vh] max-lg:w-[40vh]">
          <div className="flex flex-1 justify-start  items-center">
             <p className=" whitespace-nowrap  font-montserrat font-xl text-coral-red ">
           <Typed
            strings={[' Our Festive Season Collections🎇✨']}
            typeSpeed={40}
           backSpeed={50}
           loop
                />
        </p>
       </div>
       
        
      
          <h1 className="  text-8xl mt-24 font-bold font-palanquin max-sm:text-[72px] pt-8 max-sm:leading-[82px]">
          <span className=" xl:bg-white dark:xl:bg-[#141728] dark:xl:rounded-tr-xl  xl:whitespace-nowrap lg:whitespace-nowrap relative z-10 pr-10 ">The  New Arrival</span>
        <br />
        <span className="text-7xl mt-3  inline-block  text-[#ff7f50db]">Nike</span> Shoes
        </h1> 
           <p className=" mt-6 mb-14 leading-8 max-sm:w-[32vh]  text-lg text-slate-gray dark:text-white-400  font-montserrat sm:max-w-sm">
          Discover stylish Nike new arivals  
         quality, comfort and inovation for your active life
          </p>
            <Link to='/products'>
               <Button title="shop now" showOnSmallDevices={true} src={arrowRight} />
            </Link>
       
                <div className="flex justify-start items-start gap-16   lg:flex-nowrap flex-wrap    font-montserrat mt-14 ">
          {
            statistics.map((statistic, index) => (
              <div key={index}>
                <p className="font-bold font-palanquin text-4xl ">{statistic.value}</p>
                <p className=" font-montserrat leading-7 text-slate-gray ">{statistic.label}</p>
              </div>
            ))
          }
        </div>
         

      </div>
     <div className= "  flex items-center xl:absolute relative   xl:right-14 2xl:right-0 mx-auto  flex-col justify-center max-xl:py-40 max-xl:my-40    max-sm:w-[32vh] max-sm:mx-auto xl:min-h-screen  dark:bg-footer  bg-hero  bg-cover  bg-center  "
         
     >
        <img src={image} alt="" width={610} height={500} className=" relative  z-10  " />
        <div className=" flex sm:gap-4 gap-6   absolute  -bottom-[9.5%] sm:left-[5%]">{
          shoes.map((shoe, index) => (
            <div key={index} onClick={() => handleChange(shoe.bigShoe)} className=
              {
                    ` bg-card  rounded-xl  sm:w-40 sm:h-40 bg-cover bg-center max-sm:p-4 max-sm:mt-4 max-sm:px-3.5 ${showBorder ? `border-coral-red`:`border-0 ` }`
              }
       >
 <div >
              <img src={shoe.bigShoe} alt="shoe 1 " />
              
          </div>
            </div>
           
          
        ))
        }</div>
      
      </div>

      
 
        </section>
  

    
             
      
   
    </Fade>
     </section>
     
  );
}

export default Hero;
