

const LearnMoreButton = ({title,fullwidth}:Record<string,string>):JSX.Element => (
    <button className={` font-montserrat   bg-coral-red rounded-full  text-black flex  justify-center items-center px-7 py-3      text-lg border-0  leading-none    h-fit     ${Boolean(fullwidth)  && `w-full`} `}>  
    {title}    
    </button> 
)

export default LearnMoreButton;
