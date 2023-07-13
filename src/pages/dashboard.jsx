import { useState, useEffect } from "react";
import styles from "../styles/Dashboard.module.scss";
import { userDashboard } from "../mocks/userDashboardMock";

export default function UserDashboard() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("user")));
  }, []);

  return logged ? (
    <div className={styles.UserDashboard}>
      <div className={styles.leftColumn}>
        <div className={styles.userInfo}>
          <div className={styles.textInfo}>
            <p className={styles.username}>{userDashboard.username}</p>
            <p className={styles.email}>{userDashboard.email}</p>
          </div>
          <img src={userDashboard.profileImage} />
        </div>
        <p className={styles.followers}>
          {"Followers: " + userDashboard.followers}
        </p>
        <p className={styles.following}>
          {"Following: " + userDashboard.following}
        </p>
        <p className={styles.posts}>{"Posts: " + userDashboard.posts}</p>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.messages}>
          <h2>Messages</h2>
          {userDashboard.messages.map((message, i) => (
            <div key={i} className={styles.message}>
              <h3>{message.sender}</h3>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.loginFailed}>Login to see your dashboard</div>
  );
}
