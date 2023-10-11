import { useReducer } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
//import cartLogic from "../customHooks/cartLogic";

import { Prducts } from "../constants";


interface AllProps extends Prducts {
   index:number
};
const CartCard = ({ imgURL, name, price }: AllProps) => {

   // const { removeItemFromCart } = cartLogic();
    
    const num = Number(price?.slice(1))
    const priceInNumbers = Math.floor(num);
    
    const initialState = {
        count: 1,
        subtotals: priceInNumbers,
    }
    enum ActionType {
        INCREMENT,
        DECREMENT,
        CALCULATE_TOTAL_AMOUNT_PER_ITEM,
    }
    interface Action {
        type: ActionType
    }
    interface Count {
        count: number,
        subtotals: number,
    }
 
    const reducer = (state: Count, action: Action): Count => {
        const { type } = action;
        let { count,subtotals } = state;
        switch (type) {
            case ActionType.INCREMENT:
                return { ...state, count: count + 1 };
            case ActionType.DECREMENT:
                return { ...state, count: count - 1 };
            case ActionType.CALCULATE_TOTAL_AMOUNT_PER_ITEM:
                return { ...state, subtotals: count *= subtotals };
            default:
                return { ...state };
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
  
   
    const handlePositiveItemsDecrementCount = (): void => {
        count > 0 && dispatch({ type: ActionType.DECREMENT });
        dispatch({
            type: ActionType.CALCULATE_TOTAL_AMOUNT_PER_ITEM
        })
    }
    const handleItemsIncrementCount = (): void => {
            dispatch({ type: ActionType.INCREMENT });
            dispatch({
                type: ActionType.CALCULATE_TOTAL_AMOUNT_PER_ITEM
            })
        }
    const { count, subtotals } = state;
     const totalAmountPerItem:string = `$${subtotals.toFixed(2)}`;
       
    

    return (
    <>
        {
      <article className=" bg-slate-50  shadow-lg  p-5 ">
          <div className="shadow-lg bg-slate-200  m-4 p-5 ">
          <div className="flex gap-6"> 
              <img src={imgURL} alt={name} />
              <div className="flex flex-col font-montserrat mt-24 text-lg  gap-10  font-semibold  ">
                  <p>{name}</p>
                  <p className="text-coral-red ">{price}</p>
                  {totalAmountPerItem}
              </div>              
          </div>

          <p className="text-slate-gray text-center mt-6 text-lg ">still In stock</p>
              <div className="flex justify-between  ">
                  <div className="font-medium font-montserrat m-4 p-2 flex gap-6 text-coral-red ">
                      <button
                      onClick={()=>{}}
                      ><BsFillTrash3Fill /></button>
                      <div>REMOVE</div>
                  </div>
                  <div className="flex gap-6 p-2 m-4 ">
                    <button
                          onClick={handlePositiveItemsDecrementCount}
                          className="flex text-white bg-coral-red  border-0 py-1 px-4  rounded-0  text-lg">
                          -
                      </button> 
                       <span className="font-montserrat text-lg font-semibold ">{count}</span>
                      <button
                          onClick={handleItemsIncrementCount}
                        className="flex text-white bg-coral-red  border-0 py-1 px-4  rounded-0  text-lg">
                          +
                      </button>
                  
                     
                  </div>     
          </div>
         
          </div>
          


      </article>      
            }
            </>
    
  );
}

export default CartCard;
