import { createContext} from "react";

export const Context = createContext([
  {
    id: 1,
    name: "Home",
    value: "/",
  },
  {
    id: 2,
    name: "About",
    value: "/about",
  },
  {
    id: 3,
    name: "Contact",
    value: "/contact",
  },
  {
    id: 4,
    name: "Locations",
    value: "/locations",
  },
  {
    id: 5,
    name: "Login",
    value: "/login",
  },
]);

export const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return {firstNumb: (state.firstNumb + 1)}
    case "decrement":
      return state.firstNumb ? {firstNumb: (state.firstNumb - 1)} : {firstNumb: 1}
  }
}