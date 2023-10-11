
import { ThreeDots } from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import DetailsButton from '../components/DetailsButton';
import loading from '../components/Loading';
import PopularProductsCard from "../components/PopularProductsCard";
import { ViewProducts } from "../constants";

const PopularProducts = () => {
const isLoading = loading();
  return (
    !isLoading
      ?
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
            ViewProducts.map(product => (
            
      <div key={product.id} className=' flex max-sm:justify-center max-sm:items-center  '>
 <PopularProductsCard imgURL={product.imgURL} id={product.id }  name={product.name} price={product.price}/>
   </div>
              
              
 ))
      }       
          </div>
           <Link  to="/cart"><DetailsButton title="View Cart" noPadding={false} addToCartButton={false}/></Link>
      </Fade>
 
 
      </section>
    


      :
      
           <div id="spinner" className="flex items-center absolute top-0 right-0 justify-center w-full h-full bg-[#141728]">
        <ThreeDots 
          height="80"
          width="80" 
          radius="9"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          visible={true}
 />
    </div>
 )
  
   
;
}

export default PopularProducts;
