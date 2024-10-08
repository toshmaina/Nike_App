
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/axiosApi';
import DetailsButton from '../components/DetailsButton';
import PopularProductsCard from "../components/PopularProductsCard";
import { Prducts } from '../constants';

 


const  Popular_Products = await getProducts<Prducts>("popularProducts");

const PopularProducts = () => {
 
  

  return (
  
      <section className='max-w-[1440px] my-0 mx-auto max-sm:mt-12 sm:px-16 px-8 py-[8rem] max-sm:py-24'>
        <Fade up >
      <div className="flex flex-col justify-start gap-5 ">
      
           <h2 className="text-4xl font-palanquin font-bold "> Our <span className="text-coral-red ">
         Popular
        </span> Products.</h2>
   
   <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg leading-relaxed ">Experience our top-notch quality and style with out sought-after selections.Discover a world of comfort ,design and value.</p>
     
      </div>
     <div className="mt-16 grid lg:grid-cols-4 md-grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10  ">
  {
            Popular_Products?.map(product => {
                const dynamicImgURL: string = new URL(`../assets/images/${product.imgURL}`, import.meta.url).href; 
              return  (
            
      <div key={product.id} className=' flex max-sm:justify-center max-sm:items-center  '>
                
                    
                  <PopularProductsCard imgURL={dynamicImgURL}  id={product.id} name={product.name} price={product.price} />
                    
            
   </div>
              
              
             )
            }) 
     
      }       
          </div>
           <Link  to="/cart"><DetailsButton title="View Cart" noPadding={false} addToCartButton={false}/></Link>
      </Fade>
 
 
      </section>
    


    
 )
  
   
;
}

export default PopularProducts;
