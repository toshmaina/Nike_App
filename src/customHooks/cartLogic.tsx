import { useTheme } from "@emotion/react";
import { useReducer } from "react";
import Swal from "sweetalert2";


  interface ItemInCart  {
    name: string;
    id: number;
    imgURL: string;
   
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
  const theme = useTheme()

  type itemsInCartType = {
    cart: Array<ItemInCart>
  }
 
  const initCartState:itemsInCartType = {cart: []}

  const reducer = (state: itemsInCartType, actions: ActionsType): itemsInCartType => {
    const { type,item } = actions;
   
    const { cart } = state;
  const {id} = item
    
   

    const filteredCart: Array<ItemInCart> = cart.length ? cart.filter(item => item.id !== id) : cart;
  
      
    const itemAddedDoesNotExist: boolean = !cart.includes(item);
    //console.log(itemAddedDoesNotExist);


    switch (type) {
      case Actions.ADD_ITEM_INTO_CART: {
        console.log(cart);
        console.log(item);   
        console.log(filteredCart);
        console.log(state);
        
        
        return {
          ...state,
          cart: [...filteredCart,item],
        };
      }
      case Actions.REMOVE_ITEM_FROM_CART: {
        return { 
          ...state,
          cart: [...filteredCart]
        };
      }
     
      default: {
          return { ...state };
      }
      
    }
  }

  const [state, dispatch] = useReducer(reducer, initCartState);
  
  const {cart} = state;

  const removeItemFromCart = ({id,name,imgURL}:ItemInCart):void => {

    dispatch({
      type: Actions.REMOVE_ITEM_FROM_CART,
      item: { id: id, name: name, imgURL: imgURL },
    })
    Swal.fire(
    "Success!",
      "Item removed  from cart!",
      "success"
    );
    
    

  };

  const addItemIntoCart = ({id,name,imgURL}:ItemInCart):void => {
    dispatch({
      type: Actions.ADD_ITEM_INTO_CART,
      item: { id: id, name: name, imgURL: imgURL }
    });




 
    


  } 
 

  return { dispatch, cart , removeItemFromCart, addItemIntoCart };

}

export default cartLogic;
