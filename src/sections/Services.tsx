import Fade from 'react-reveal/Fade';
import { getProducts } from '../api/axiosApi';
import ServiceCard from "../components/ServiceCard";
import { Service } from "../constants";
const services = await getProducts<Service>("services"); 

const Services = () => {
  return (
      <section className='sm:px-16 px-8 py-10' id='about-us'>
    <Fade up >
<section className="flex flex-1 justify-center flex-wrap  max-w-[1440px] my-0 mx-auto gap-9 ">
          {services.map(service => {
            const dynamicImgURL:string = new URL(`../assets/icons/${service.imgURL}`, import.meta.url ).href
            return (
        <ServiceCard key={service.label} imgURL={dynamicImgURL} label={ service.label} subtext={service.subtext} /> 
      )})}
    </section>
    </Fade>    
      </section>
  
    
    
  );
}

export default Services;
