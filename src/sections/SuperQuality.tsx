import Fade from 'react-reveal/Fade';
import { shoe8 } from "../assets/images";
import DetailsButton from "../components/DetailsButton";
const SuperQuality = () => {
  return (
    <Fade up  >
 <section className="flex justify-between sm:px-16 px-8 sm:py-24 py-12 items-center max-lg:flex-col max-w-[1440px] my-0 mx-auto max-sm:mt-12  gap-10">
      <div className="flex flex-col flex-1">
        <h2 className=" text-4xl font-bold capitalize font-palanquin lg:max-w-lg ">
       We provide You
        <span className=" text-coral-red"> Super </span> 
        <span className=" text-coral-red">Quality</span> Shoes
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
    Ensuring premium quality and style, our meticulously crafted footware is designed to elevate your experience ,providing you with unmatched quality,inovation ,and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 "> 
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
        <DetailsButton title="View Details"/>

        </div>
     
      </div>
      <div className="flex flex-1 items-center justify-center"><img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/></div>

    </section>
    </Fade>
   
  );
}

export default SuperQuality;
