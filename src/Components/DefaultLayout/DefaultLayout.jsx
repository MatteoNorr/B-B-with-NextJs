import Link from "next/link";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  const links = [
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
  ];

  return (
    <div className={styles.DefaultLayout}>
      <ul className={styles.Navbar}>
        {links.map((link, i) => (
          <Link href={link.value}>
            <li key={i}>{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className={styles.content}>{children}</div>
      <div className={styles.Footer}>Footer</div>
    </div>
  );
};

export default DefaultLayout;
