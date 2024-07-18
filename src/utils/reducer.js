import { Type } from "./action.type";

let initialState = {
  basket: [],
};

let reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export { reducer, initialState };
