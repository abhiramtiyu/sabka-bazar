import { createContext ,useReducer} from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducer";

 const CartContext = createContext({
    products: [],
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: id => {}
  });
  

const  CartProvider=({ children }) =>{
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  
    const addProductToCart = product => {
        setTimeout(() => {
          // setCart(updatedCart);
          dispatch({ type: ADD_PRODUCT, product: product });
        }, 700);
      };
    
      const removeProductFromCart = id => {
        setTimeout(() => {
          dispatch({ type: REMOVE_PRODUCT, id: id });
        }, 700);
      };

  return (
      <CartContext.Provider value={{  cart: cartState.cart,addProductToCart: addProductToCart,removeProductFromCart: removeProductFromCart}}>
        {children}
      </CartContext.Provider>
    );
  }
  export {CartContext, CartProvider}