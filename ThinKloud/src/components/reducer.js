import { category, ChikenMeals, MeatMeals } from "./../data";
//Reducer Default State
export const defaultState = {
  orderCateg: category,
  meals: [],
  item: "",
  q: 1,
  price: "",
  addCompo: false,
  addSpicy: false,
  total: 0,
};
//=====================
// Reducer Actions
export const reducer = (state, action) => {
  //Set the defualt values
  if (action.type === "ORDERS") {
    return { ...state, meals: [], total: 0 };
  }
  // set The Meat as Category Meal
  if (action.type === "MEAT_MEAL") {
    return { ...state, meals: MeatMeals };
  }
  // set The Chiken as Category Meal
  if (action.type === "CHIKEN_MEAL") {
    return { ...state, meals: ChikenMeals };
  }
  // set the default price
  if (action.type === "DEFAULT_PRICE") {
    return { ...state, total: 0 };
  }
  // Set the Meals Price ---->
  if (action.type === "COLD_MEAT_PRICE") {
    return { ...state, item: "Cold Meat", total: 20, price: 20 };
  }
  if (action.type === "MEAT_SOUCE_PRICE") {
    return { ...state, item: "Meat With Souce", total: 25, price: 25 };
  }
  if (action.type === "GRILLED_CHIKEN_PRICE") {
    return { ...state, item: "Girlled Chiken", total: 18, price: 18 };
  }
  if (action.type === "INDIAN_CHIKEN_PRICE") {
    return { ...state, item: "Indian Chiken", total: 10, price: 10 };
  } //------------------>
  //Set the Q
  if (action.type === "SET_QUNTITY") {
    return {
      ...state,
      q: action.payload,
    };
  }
  // Increase the q from the event
  if (action.type === "INCREASE_TOTAL_QUNTITY") {
    return { ...state, total: state.q * state.price };
  } // Controll the price from checkbox ------>
  if (action.type === "ADD_ON_COMPO") {
    return { ...state, addCompo: true, total: state.total + 2 };
  }
  if (action.type === "REMOVE_ADD_ON_COMPO") {
    return { ...state, addCompo: false, total: state.total - 2 };
  }
  if (action.type === "ADD_ON_SPICY") {
    return { ...state, addSpicy: true, total: state.total + 1 };
  }
  if (action.type === "REMOVE_ADD_ON_SPICY") {
    return { ...state, addSpicy: false, total: state.total - 1 };
  } //<-----------------
};
//======================
