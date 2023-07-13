import { roomList } from "../mocks/reservations";
import styles from "../styles/Contact.module.scss";
import Link from "next/link";

export default function () {
  return (
    <div className={styles.Contact}>
      <h1>Contacts</h1>
      {roomList.map((room, i) => (
        <ul key={i}>
          <li>{room.contact.phone}</li>
        </ul>
      ))}
      <Link href="/">
        <button>←</button>
      </Link>
    </div>
  );
}
