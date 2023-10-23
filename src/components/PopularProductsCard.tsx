/* import { star } from "../assets/icons"; */
import Rating from "@mui/material/Rating";
import { useRef, useState } from "react";
import Confetti from 'react-confetti';
//import useHover from "usehooks-ts/dist/esm/useHover/useHover";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Prducts } from "../constants";
import DetailsButton from "./DetailsButton";
import loading from "./Loading";



export type AllCardProps = Prducts &   {addItemIntoCart : ({name,id,imgURL,price}: Prducts) => void}; 
type CardWithSkeleton = Prducts & {showSkeleton?: boolean}
const PopularProductsCard = ({ imgURL, name, price,id,showSkeleton }:CardWithSkeleton) => {
  
  const isLoading:boolean = loading(5000);
  const [rating, setRating] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null)

  
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:justify-center max-sm:items-center">
      {
        !isLoading ?
          <>
      < img ref={imageRef} src={imgURL} alt={name} className=" w-[280px] h-[280px]     opacity-100  flex items-center justify-center"/>
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
          </> :
              <Stack spacing={1} className="transition">
               <Skeleton animation="wave" variant="rectangular" width={280} height={280} />
              <Skeleton variant="text"  width={210} height={50} />
            <Skeleton variant="circular" width={30} height={30} />
              <Skeleton variant="text" height={50} width={210} />
            <Skeleton animation="wave" variant="rectangular" width={60} height={40} />
            <Skeleton variant="rounded" width={200} height={40} />
            </Stack>
              
          
          
      }
     
     
      </div>

       
  );
  } 


export default PopularProductsCard;
