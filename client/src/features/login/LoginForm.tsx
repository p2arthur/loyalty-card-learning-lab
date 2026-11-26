import { useState, type SubmitEvent } from "react";
import { submitLogin } from "./login.api";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitLoginForm(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    try {
      await submitLogin({ email, password });
    } catch {
      setErrorMessage("Could not log in. Please try again");
    }
  }

  return (
    <>
      <form onSubmit={submitLoginForm}>
        <label>
          Email
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="email address"
          />
        </label>

        <label>
          Password
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="text"
            placeholder="password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </>
  );
}
