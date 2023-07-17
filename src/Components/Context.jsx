import { createContext, useState } from "react";

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

// const Theme = createContext();

// export function ThemeFuction({ children }) {
//   const [value, setValue] = useState();
//   return <Theme.Provider value={value}>{children}</Theme.Provider>;
// }
