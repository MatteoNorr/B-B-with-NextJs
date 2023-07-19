import Link from "next/link";
import styles from "./DefaultLayout.module.scss";
import { useContext, useReducer } from "react";
import { Context, reducer } from "../Context";

//Esercizio avanzato
const DefaultLayout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { firstNumb: 1 });

  const increment = () => dispatch({type: "increment"})
  const decrement = () => dispatch({type: "decrement"})

  //Sostituisco il mock con uno useContext
  const links = useContext(Context);

  return (
    <div className={styles.DefaultLayout}>
      <ul className={styles.Navbar}>
        {links.map((link, i) => (
          <Link href={link.value}>
            <li key={i}>{link.name}</li>
          </Link>
        ))}
        <button onClick={increment}>+</button>
        <p>Number of guests</p>
        <p>{state.firstNumb}</p>
        <button onClick={decrement}>-</button>
      </ul>
      <div className={styles.content}>{children}</div>
      <div className={styles.Footer}>Footer</div>
    </div>
  );
};

export default DefaultLayout;
