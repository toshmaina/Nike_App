import { Rating } from "@mui/material";
import { useState } from "react";

interface Reviews  {
    imgURL: string;
    customerName: string;
    feedback: string;
}
const ReviewCard = ({ imgURL, customerName, feedback }: Reviews) => {

  const [rating, setRating] = useState<number|null>(null);
  return (
    <>
  
    
    <div className="flex flex-col items-center justify-center ">
          <img src={imgURL} alt={customerName} className="rounded-full object-contain w-[120px] h-[120px]" />
          <p>{feedback}</p>
      <div className="mt-3 flex flex-col  justify-center items-center gap-2.5">
        <Rating precision={1} value={rating} onChange={(_,rating) => setRating(rating)}/>
          <p className="text-xl font-montserrat text-slate-gray ">({rating ?? 0 })</p>
         </div>
          <h3 className="mt-1 font-palanquin text-center font-bold text-3xl  ">{customerName}</h3>
      </div>
       </>
  );
} 

export default ReviewCard;
