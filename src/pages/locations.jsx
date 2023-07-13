import styles from "../styles/Location.module.scss";
import { roomList } from "../mocks/reservations";
import Link from "next/link";

export default function () {
  const renderLocations = () =>
    roomList.map((room, i) => (
      <div key={i} className={styles.Location}>
        <div className={styles.main}>
          <img src={room.imageLocation} alt="" />
          <h2>{room.name}</h2>
        </div>
        <div className={styles.info}>
          <p>{room.description}</p>
          <p>{room.price + "€"}</p>
          <p className={styles.amenities}>{room.amenities}</p>
          <p>{room.rating + "⭐"}</p>
        </div>
      </div>
    ));

  return (
    <div className={styles.Locations}>
      <h1>Our locations</h1>
      {renderLocations()}
      <Link href="/">
        <button>←</button>
      </Link>
    </div>
  );
}
