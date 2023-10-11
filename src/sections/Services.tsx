import Fade from 'react-reveal/Fade';
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";


const Services = () => {
  return (
      <section className='sm:px-16 px-8 py-10' id='about-us'>
    <Fade up >
<section className="flex flex-1 justify-center flex-wrap  max-w-[1440px] my-0 mx-auto gap-9 ">
      {services.map(service => (
        <ServiceCard key={service.label} imgURL={service.imgURL} label={ service.label} subtext={service.subtext} /> 
      ))}
    </section>
    </Fade>    
      </section>
  
    
    
  );
}

export default Services;
