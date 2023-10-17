import { Rating } from "@mui/material";

interface Reviews  {
    imgURL: string;
    customerName: string;
    feedback: string;
    rating : number;
}
const ReviewCard = ({ imgURL, customerName, feedback,rating }: Reviews) => (
    <>  
    <div className="flex flex-col items-center justify-center ">
          <img src={imgURL} alt={customerName} className="rounded-full object-contain w-[120px] h-[120px]" />
          <p>{feedback}</p>
      <div className="mt-3 flex flex-col  justify-center items-center gap-2.5">
        <Rating  value={rating}/>
          <p className="text-xl font-montserrat text-slate-gray ">({rating})</p>
         </div>
          <h3 className="mt-1 font-palanquin text-center font-bold text-3xl  ">{customerName}</h3>
      </div>
       </>
  );


export default ReviewCard;
