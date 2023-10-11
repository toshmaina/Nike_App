import { BsEyeFill, BsFillCartPlusFill } from 'react-icons/bs';
import cartLogic from "../customHooks/cartLogic";
import { ButtonType } from "./Button";

interface AllProps extends Partial < ButtonType > {
  imageURL: string;
  name: string;
  price: string;
}
const DetailsButton = ({ title, noPadding, addToCartButton, id, imageURL, name, price }: Partial<AllProps>) => {
  const {addItemIntoCart} = cartLogic();
  const showCart: boolean = addToCartButton!;
  const itemToBeAdded = { id: id!, name: name!, imgURL: imageURL! };
  console.log(id);
  

  return (
    <button className={`rounded-full ${!noPadding && `rounded-none w-full `} border-[coral]  bg-[coral] flex justify-center    items-center px-7 py-3 text-lg border leading-none w-fit h-fit ${!noPadding! && `mt-16`} mt-0`}
      onClick={() => showCart && addItemIntoCart(itemToBeAdded)}
    >
      {title}
      <div className=' leading-none ml-2 p-1 w-5 h-5'>
        {
          showCart ? <BsFillCartPlusFill /> :  <BsEyeFill/>
       
 } 
      </div>
    
 </button>
  );
}
export default DetailsButton;
