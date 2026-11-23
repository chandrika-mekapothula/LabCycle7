
import { useState, type FormEvent } from "react";

const UserDetails = () => {

  // Input states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Error states
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  // Success state
  const [success, setSuccess] = useState<string>("");

  // Handle Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous errors
    setNameError("");
    setEmailError("");
    setMessageError("");
    setSuccess("");

    let isValid = true;

    // Name validation
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.trim().length < 10) {
      setMessageError("Message must contain at least 10 characters");
      isValid = false;
    }

    // Successful submission
    if (isValid) {
      console.log({
        name,
        email,
        message,
      });

      setSuccess("Form submitted successfully!");

      // Reset input fields
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>

        <h2>Contact Us</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />

          {nameError && (
            <span className="error">{nameError}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>

          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />

          {emailError && (
            <span className="error">{emailError}</span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>

          <textarea
            value={message}
            placeholder="Enter your message"
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError("");
            }}
          />

          {messageError && (
            <span className="error">{messageError}</span>
          )}
        </div>

        <button type="submit">Submit</button>

        {success && (
          <p className="success">{success}</p>
        )}

      </form>
    </div>
  );
};

export default UserDetails;
