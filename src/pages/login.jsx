import { useState } from "react";
import Router from "next/router";
import { users } from "../mocks/credentialMock";
import styles from "../styles/Login.module.scss";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        users.find((user) => user.id === username && user.password === password)
      ) {
        Router.push("/dashboard");
        localStorage.setItem("user", true);
      }
      throw new Error("Credenziali errate");
    } catch (error) {
      console.log(error);
    }
  };

  const usernameValue = (e) => setUsername(e.target.value);
  const passwordValue = (e) => setPassword(e.target.value);

  return (
    <div className={styles.Login}>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <input
          value={username}
          onChange={usernameValue}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={passwordValue}
          type="password"
          placeholder="password"
        />
        <input className={styles.submit} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default login;
