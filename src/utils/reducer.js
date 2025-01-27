import { Type } from "./action.type";

let initialState = {
  basket: [],
  user: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      let exsistingItem = state.basket.find((item) => {
        return item.id === action.item.id;
      });

      if (!exsistingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        let updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      let index = state.basket.find((item) => {
        item.id === action.id;
      });
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice((index, 1));
        }
      }
      return {
        ...state,
        basket: newBasket,
      };

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export { reducer, initialState };
