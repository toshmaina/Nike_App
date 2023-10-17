
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import Fade from 'react-reveal/Fade';
import ReviewCard from "../components/ReviewCard";
 


const CustomersReviews = (): JSX.Element => (
 <section className='bg-pale-blue dark:bg-[#141728]    sm:px-16 px-8 sm:py-24 py-12  '>
     
      <section className='max-w-[1440px] my-0  '>
        <Fade up>
          <h3 className="mx-auto font-palanquin font-bold text-4xl text-center">What our <span className="text-coral-red">Customers</span> Say?</h3>
          <p className="max-w-lg font-montserrat text-center   text-lg leading-7 text-slate-gray  mt-4 mx-auto "> Hear genuine stories from our satisfied Customers about their exceptional experiences with us</p>
      </Fade>
      
             <CarouselProvider
          naturalSlideHeight={20}
          naturalSlideWidth={20}
          totalSlides={2}
        
        >

      <div className="flex flex-1 justify-around  gap-0 items-center max-lg:flex-col  mt-24">
 

          

            
        {
         <Slider>
            reviews.map((review, index) => (  
           
               <Slide index={index}>
                    <ReviewCard key={index} rating={review.rating} feedback={review.feedback} customerName={review.customerName} imgURL={review.imgURL} 
                  />            
                </Slide>
            

            ))
            </Slider>
            }
              
         
         
        </div>
         </CarouselProvider>
              
      </section>
    </section>

)

  
  


export default CustomersReviews;
