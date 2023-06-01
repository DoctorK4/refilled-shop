import { createStore } from 'redux';
import { AddToCartAction, AppState, RemoveFromCartAction } from '@/types/cartItem';

const initialState: AppState = {
  cartItems: [] 
};

type AppAction = AddToCartAction | RemoveFromCartAction;

const reducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id || item.option?.id !== action.payload.option?.id),
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;
