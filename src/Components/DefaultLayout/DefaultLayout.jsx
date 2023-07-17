import Link from "next/link";
import styles from "./DefaultLayout.module.scss";
import { useContext, useReducer } from "react";
import { Context } from "../Context";

//Esercizio avanzato
function reducerPlus(state, action) {
  return { firstNumb: state.firstNumb + 1 };
}
function reducerMinus(state, action) {
  return { numb: state.firstNumb - 1 };
}

const DefaultLayout = ({ children }) => {
  const [stateInit, dispatchPlus] = useReducer(reducerPlus, { firstNumb: 0 });
  const [state, dispatchMin] = useReducer(reducerMinus, {
    numb: stateInit,
  });

  const increment = () => dispatchPlus();
  const decrement = () => dispatchMin();

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
        <p>{stateInit.firstNumb}</p>

        <button onClick={decrement}>-</button>
      </ul>
      <div className={styles.content}>{children}</div>
      <div className={styles.Footer}>Footer</div>
    </div>
  );
};

export default DefaultLayout;
