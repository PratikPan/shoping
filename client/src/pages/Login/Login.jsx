import styled from "styled-components";
import { mobile } from "../../responsive";
import styles from "./login.module.css";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  ${mobile({ width: "75%" })}
`;

const Login = () => {
  const [tab, setTab] = useState("SIGN IN");
  const handleTab = (e) => {
    setTab(e.target.innerText);
    // console.log(e.target.innerText);
  };
  console.log(tab);
  return (
    <Container>
      <Wrapper>
        <div className={styles.main}>
          <div className={styles.firstPart}>
            <button
              className={`${styles.btn} ${
                tab === "SIGN UP" ? styles.selected : ""
              }`}
              onClick={handleTab}
              id="Btn1"
            >
              SIGN UP
            </button>
            <button
              className={`${styles.btn} ${
                tab === "SIGN IN" ? styles.selected : ""
              }`}
              onClick={handleTab}
              id="Btn2"
            >
              SIGN IN
            </button>
          </div>
          <div
            className={styles.secondPart1}
            style={{ display: tab === "SIGN UP" ? "block" : "none" }}
          >
            <form method="POST">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name*"
                autofocus
                required
              />
              <input
                type="text"
                name="lastname"
                id="lastName"
                className={styles.lastName}
                placeholder="Last Name*"
                required
              />
              <input
                type="email"
                id="email"
                name="e-mail"
                className={styles.E_mail}
                placeholder="Email Address*"
                required
              />
              <input
                type="text"
                id="phoneno"
                name="phoneNo"
                placeholder="Phone No*"
                className={styles.E_mail}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password*"
                className={styles.E_mail}
                required
              />

              <button className={styles.signupBtn}>SIGN UP</button>
            </form>
          </div>
          <div
            className={styles.secondPart2}
            style={{ display: tab === "SIGN IN" ? "block" : "none" }}
          >
            <form>
              <input
                type="email"
                name="E-Mail"
                placeholder="Email Address"
                className={styles.E_mail}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={styles.E_mail}
                required
              />

              <button className={styles.signupBtn}>SIGN IN</button>

              <a href="#" className={styles.fp}>
                Forgot your password?
              </a>
            </form>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Login;
