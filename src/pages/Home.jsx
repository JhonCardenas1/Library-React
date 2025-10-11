import { useEffect, useState } from "react";
import { Main } from "../components/Main";
import "./Home.css";

export function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("welcomeUser");
    if (userName) {
      setWelcomeMessage(`👋 Bienvenido ${userName}`);
      localStorage.removeItem("welcomeUser");
      setTimeout(() => setWelcomeMessage(""), 3000);
    }
  }, []);

  return (
    <div className="home">
      {welcomeMessage && (
        <div className="toast__bienvenida">{welcomeMessage}</div>
      )}
      <Main />
    </div>
  );
}

export default Home;
