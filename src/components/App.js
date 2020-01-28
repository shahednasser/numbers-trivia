import React, {useEffect, useState} from 'react'; 
import Form from './Form'; 
import '../styles/App.css'; 
 
function App() {
  const [ welcomeMessage, setWelcomeMessage ] = useState(
    "Welcome to Numbers Trivia!",
  );
useEffect(() => {
    setTimeout(() => {
      setWelcomeMessage("Try Out Our Number Trivia Generator!");
    }, 3000);
  }, []);
return (
    <div className="App">
        <header>
            <a href="https://github.com/shahednasser/numbers-trivia" className="github-link">Github</a>
        </header>
        <div className="app-container">
            <h1>{welcomeMessage}</h1>
            <Form/>
        </div>
    </div>
  );
}
export default App;
