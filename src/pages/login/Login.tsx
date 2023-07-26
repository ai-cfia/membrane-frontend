import React, { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./Login.module.css";
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";
import {
  LayoutContainer,
  LogoContainer,
  FormContainer,
  InputContainer,
} from "../../styles/indexElements";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Perform the desired action with the email value, such as sending it to the server
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
  };

  return (
    <LayoutContainer>
      <LogoContainer>
        <a href="/" title="ACIA | CFIA">
          <img src={cfia} alt="CFIA logo" className={styles.githubLogo} />
        </a>
      </LogoContainer>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              Send Email
            </button>
          </InputContainer>
        </form>
      </FormContainer>
    </LayoutContainer>
  );
};

export default Home;
