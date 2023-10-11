import { useReducer } from "react";
import Swal from "sweetalert2";

  interface ItemInCart  {
    name: string;
    id: number;
    imgURL : string;
  };

  enum Actions {
    SHOW_TOTAL_AMOUNT,
    ADD_ITEM_INTO_CART,
    REMOVE_ITEM_FROM_CART,

  }
  export interface ActionsType {
    type: Actions;
    item: ItemInCart;
  }



const cartLogic = () => {

  const itemsInCart: Array<ItemInCart> = []

  const reducer = (state: Array<ItemInCart>, actions: ActionsType): Array<ItemInCart> => {
    const { type,item } = actions;
    const { id } = item;
    

    
    const itemToBeAdded: ItemInCart = item;
    //console.log(itemToBeAdded);
    
  
    const itemsLeftInCart = state.filter(({id}) => id !== id);
      //console.log(itemsLeftInCart);
      
    
        
    //const itemAddedDoesNotExist:boolean = !state.includes(itemToBeAdded);
    //console.log(itemAddedDoesNotExist);


    switch (type) {
      case Actions.ADD_ITEM_INTO_CART:
    
        console.log(state);
       // console.log(itemsInCart);
        
       // console.log(itemToBeAdded);
        //console.log();
        const item = state.push(itemToBeAdded);
        
        return [...state, itemToBeAdded];
        
      
      case Actions.REMOVE_ITEM_FROM_CART:
        return [...state, ...itemsLeftInCart];
      default:
        return [...state];
    }

  



  }

 const [state, dispatch] = useReducer(reducer,itemsInCart);

  const removeItemFromCart = ({id,name,imgURL}:ItemInCart):void => {

    dispatch({
      type: Actions.REMOVE_ITEM_FROM_CART,
      item: { id: id, name: name, imgURL: imgURL },
    })
    Swal.fire("Success!", "Item removed  from cart!", "success");
    
    

  };

  const addItemIntoCart = ({id,name,imgURL}:ItemInCart):void => {
    dispatch({
      type: Actions.ADD_ITEM_INTO_CART,
      item: { id: id, name: name, imgURL: imgURL }
    });
    Swal.fire("Success!", "Item added into cart!", "success");
    
console.log(state.length);

  } 
 

  return {  state, removeItemFromCart, addItemIntoCart };

}

export default cartLogic;
