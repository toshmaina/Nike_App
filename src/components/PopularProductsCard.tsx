/* import { star } from "../assets/icons"; */
import Rating from "@mui/material/Rating";
import { useRef, useState } from "react";
import Confetti from 'react-confetti';
//import useHover from "usehooks-ts/dist/esm/useHover/useHover";
import { Prducts } from "../constants";
import DetailsButton from "./DetailsButton";


const PopularProductsCard = ({ imgURL, name, price,id }: Prducts) => {
  
  
  const [rating, setRating] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null)
  //const hover = useHover<HTMLImageElement>(imageRef)
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:justify-center max-sm:items-center">
       < img ref={imageRef} src={imgURL} alt={name} className=" w-[280px] h-[280px] bg-black bg-cover bg-center    opacity-100  flex items-center justify-center"/>
    <div className="mt-8 flex flex-col justify-start gap-2.5">
        <Rating precision={0.5} value={rating} onChange={(_, value) => setRating(value!)} /> 
        {rating !== null && rating >= 2.5  &&  <Confetti recycle={false} gravity={0.5} numberOfPieces={500}  />}
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">{`( ${rating || 0 } )`}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin ">{name}</h3>
        <p className="font-semibold mt-2 font-montserrat text-2xl text-coral-red leading-normal">{price}</p>
  
        <DetailsButton
          name={name}
          price={price!}
          imageURL={imgURL}
          id={id}
          title="Add to Cart"
          noPadding={true}
          addToCartButton={true} />

      </div>
      </div>

       
  );
  } 


export default PopularProductsCard;
