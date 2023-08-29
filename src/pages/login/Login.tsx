import React, { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react"; // Use 'import type' for types
import styles from "./Login.module.css";
import cfia from "../../assets/CFIA_SmartSearch_Logo.png";
import {
  LayoutContainer,
  LogoContainer,
  FormContainer,
  InputContainer,
  WarningMessage,
  SuccessMessage,
} from "../../styles/indexElements";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setIsValidEmail(true);
    setEmailSent(false); // Reset email sent state whenever email changes
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const submitForm = async (): Promise<void> => {
      const emailRegex = /(gc\.ca|canada\.ca|inspection\.gc\.ca)$/i;

      if (emailRegex.test(email)) {
        try {
          const response = await fetch("http://127.0.0.1:5000/authenticate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // This is crucial
            body: JSON.stringify({ email }), // Using ES6 object shorthand syntax
          });

          if (!response.ok) {
            throw new Error("Server response was not ok");
          }

          const responseData = await response.json();
          console.log(responseData);
          console.log("Valid Email submitted:", email);
          setIsValidEmail(true);
          setEmailSent(true); // Set email sent state to true after a successful dispatch
          setTimeout(() => {
            setEmailSent(false); // Reset email sent state after 5 seconds
          }, 5000);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      } else {
        console.log(
          "Invalid Email: Please enter a valid email ending with 'gc.ca', 'canada.ca', or 'inspection.gc.ca'",
        );
        setIsValidEmail(false);
      }

      setEmail("");
    };

    submitForm().catch((error) => {
      console.error("Error with the submitForm function:", error);
    });
  };

  useEffect(() => {
    if (!isValidEmail) {
      const timeoutId = setTimeout(() => {
        setIsValidEmail(true);
      }, 5000);

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
        </form>
        {emailSent && <SuccessMessage>Email has been sent!</SuccessMessage>}
        {!isValidEmail && (
          <WarningMessage>Please enter a valid email.</WarningMessage>
        )}
      </FormContainer>
    </LayoutContainer>
  );
};

export default Home;
