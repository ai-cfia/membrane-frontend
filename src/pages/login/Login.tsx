import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
  useEffect,
} from "react";
import styles from "./Login.module.css";
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";
import {
  LayoutContainer,
  LogoContainer,
  FormContainer,
  InputContainer,
  WarningMessage,
} from "../../styles/indexElements";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Reset the validation state when the email changes
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Regular expression to check for valid email ending with "gc.ca", "canada.ca", or "inspection.gc.ca"
    const emailRegex = /(gc\.ca|canada\.ca|inspection\.gc\.ca)$/i;

    if (emailRegex.test(email)) {
      // Perform the desired action with the valid email value, such as sending it to the server
      console.log("Valid Email submitted:", email);
      setIsValidEmail(true); // Reset the validation state when the email is valid
    } else {
      console.log(
        "Invalid Email: Please enter a valid email ending with 'gc.ca', 'canada.ca', or 'inspection.gc.ca'",
      );
      setIsValidEmail(false); // Set the validation state to false when the email is invalid
    }

    // Reset the email input
    setEmail("");
  };

  useEffect(() => {
    if (!isValidEmail) {
      // Set a timeout to reset the validation state after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsValidEmail(true);
      }, 5000);

      // Clean up the timeout when the component unmounts or the state changes
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isValidEmail]);

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
          {!isValidEmail && (
            <WarningMessage>Please enter a valid email.</WarningMessage>
          )}
        </form>
      </FormContainer>
    </LayoutContainer>
  );
};

export default Home;
