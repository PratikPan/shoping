import styled from "styled-components";
import { mobile } from "../../responsive";
import styles from "./login.module.css";

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
  return (
    <Container>
      <Wrapper>
        <div className={styles.main}>
          <div className={styles.firstPart}>
            <button className={styles.btn} id="Btn1">
              SIGN UP
            </button>
            <button className={styles.selected + " " + styles.btn} id="Btn2">
              SIGN IN
            </button>
          </div>
          <div className={styles.secondPart2}>
            <h1 className={styles.firstLine}>Sign in to your account</h1>
            <p>
              Your student account is your portal to all things Udacity: your{" "}
              <br />
              classroom, projects, forums, career resources, and more!
            </p>
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

              <p>
                By clicking Sign Up, you agree to our{" "}
                <a href="#">Terms of Use</a> and our{" "}
                <a href="#">Privacy Policy</a>.
              </p>

              <button className={styles.signinBtn}>SIGN UP</button>

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
