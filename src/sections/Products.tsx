import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';
import PopularProductsCard from '../components/PopularProductsCard';

import { getProducts } from '../api/axiosApi';
import { Prducts } from '../constants';


interface ProductsOnly{
     showProductsOnly?: boolean;
     id?: number;
    
}

     const products = await  getProducts<Prducts>('products');

const Products = ({ showProductsOnly }: ProductsOnly) => {

    
     return (

     <section className='max-w-[1440px] my-0 mx-auto max-sm:mt-12 sm:px-16 px-8 py-[8rem] max-sm:py-24' id=''> 
          <section className="max-w-[1440px] my-0 mx-auto max-sm:mt-12 ">
               {
                    !showProductsOnly &&
                    (
   <div className="flex flex-col justify-start gap-5 ">
        <Fade up >
           <h2 className="text-4xl font-palanquin font-bold "> Our <span className="text-coral-red ">
         Popular
        </span> Products.</h2>
        </Fade>
        <Fade up>
   <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg  ">Experience our top-notch quality and style with out sought-after selections.Discover a world of comfort ,design and value.</p>
        </Fade>
     
      </div>           
                    )

     
            }   
    
             
                   {  
                    showProductsOnly && (
                         <>
                    
                            <h2 className="text-3xl font-palanquin font-bold "> More  <span className="text-coral-red ">
         Products.
        </span></h2>
                    <div className="flex flex-1 justify-start  items-center m-4 p-2 ">
             <p className="  font-montserrat font-xl text-coral-red ">
           <Typed
            strings={[' Lets continue shopping']}
            typeSpeed={40}
             backSpeed={50}
             loop
                />
             </p>
                              </div>  
                              
                           </>   )

      
          } 
                 <Fade up >
     <div className={` grid ${showProductsOnly ? `lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2 my-0 mx-auto  p-5   grid-cols-1`:` mt-16  lg:grid-cols-4 md-grid-cols-3 sm:grid-cols-2 grid-cols-1`} sm:gap-4 gap-14`}>
  { 
                                   products?.map(product => {
                                        const dynamicImgURL: string = new URL(`../assets/images/${product.imgURL}`, import.meta.url).href; 
               return (
      <div key={product.name} className=' flex max-sm:justify-center max-sm:items-center  '>
 <PopularProductsCard id={product.id}  imgURL={dynamicImgURL} name={product.name} price={product.price}/>
      </div>
 )})
      }       
</div>
      </Fade>
 
 
    </section>
    
</section>
)}
  


export default Products;
