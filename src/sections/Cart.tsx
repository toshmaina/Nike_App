
import CartCard from "../components/CartCard";
import { products } from "../constants";
import cartLogic from "../customHooks/cartLogic";
import Products from './Products';
export const  numberOfItemsInCart = products.length;



const Cart = () => {
  const { state } = cartLogic();
 
  const totalItemsInCart   = state.length;

  return (
    <section className=" relative">
      <section className="max-w-[1440px] my-0 mx-auto  sm:px-16 px-8 py-[8rem] max-sm:py-24">
        <section className="flex max-xl:flex-col gap-8  ">
          <section className="xl:min-w-[54%] ">
            <div className="font-palanquin  mt-8">
              <h2 className="pl-10 rounded shadow-md font-semibold leading-relaxed mt-8 bg-slate-100 dark:bg-[#141728] p-4 mb-4  text-xl  ">
                SHOPPING
                <span className="text-coral-red "> CART</span>
              </h2>
              <h3 className=" rounded shadow-md leading-relaxed font-[545]    mt-4  bg-slate-100 dark:bg-[#141728]  p-4 mb-2">
                CART SUMMARY
              </h3>
            </div>
            <div className="flex font-semibold leading-relaxed mt-8 bg-slate-50 dark:bg-[#141728]  p-4 mb-4  text-lg  justify-around ">
              <h3 className="font-palanquin ">
                SUBTOTAL
              </h3>
              <p className="  font-semibold  font-montserrat text-xl text-coral-red leading-none ">
                Amount(0)
              </p>
            </div>
            <div className="font-semibold text-lg leading-relaxed flex gap-6   m-8 p-4   ">
              <h3 className="font-palanquin">
                CART
              </h3>
              <div className="font-montserrat">
                ({totalItemsInCart } )
              </div>
            </div>
            {
         state.map((product,index) => (
              <CartCard
                  key={index}
                  imgURL={product.imgURL}
                  name={product.name}
                  id={product.id}
                  index={index}
                  
                  
                 />
              ))
            }
           

          </section>

          
          <section>
            <Products showProductsOnly={true}/>
        </section>

          
        </section>

      </section>
           
</section>
  );
}

export default Cart;
