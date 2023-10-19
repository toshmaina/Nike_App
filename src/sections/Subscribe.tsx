import Fade from 'react-reveal/Fade';
import LearnMoreButton from "../components/LearnMoreButton";


const Subscribe = () => (
    <section className='sm-py-32 py-16 w-full sm:px-16 px-8'>
    <Fade up>
 <section className="flex flex-1 max-lg:flex-col xl:h-screen  max-w-[1440px] my-0 mx-auto items-center justify-between gap-10 " id="contact us ">
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md ">Sign Up for <span className="text-coral-red">Updates</span> & newsletter  </h3>
      <div className="lg:max-w-[40%] w-full flex  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray  rounded-full ">
        <input className="input" type="text" name="subscribe" id="subscribe" placeholder="subscribe @nikey for updates" />
      <div className="flex max-lg:justify-end items-center max-sm:w-full  ">

       <LearnMoreButton title="Sign In " fullwidth={"fullwidth"}/>
        </div>
        </div>  
</section>
    </Fade>  
    </section>
  
  );


export default Subscribe;
