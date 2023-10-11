import Fade from 'react-reveal/Fade';
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import LearnMoreButton from "../components/LearnMoreButton";
const SpecialOffer = () => {
  return (
    <section className='sm:px-16 px-8 sm:py-24 py-12'>
 <Fade up  >
 <section className="flex justify-center flex-wrap max-xl:flex-col-reverse gap-10  max-w-[1440px] my-0 mx-auto ">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain  w-full" />
      </div>
 <div className="flex flex-col flex-1">
        <h2 className=" text-4xl font-bold  font-palanquin lg:max-w-lg ">
        <span className=" text-coral-red">  Special </span> Offer
        </h2>          
        <p className=" mt-4   lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
    Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings,we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 "> 
          Navigate our realm of possibilities designed to fulfill your desires ,surpassing the loftiest expectations.Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-16 flex max-sm:gap-3  flex-wrap justify-around    ">
        
          <Button title="Shop Now" src={arrowRight} />
          <LearnMoreButton title="Learn More" margin={"margin"}/>

        </div>
     
      </div>
   
    </section>
 
    </Fade>
    </section>
   
   
  );
}

export default SpecialOffer;
