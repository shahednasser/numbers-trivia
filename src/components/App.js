import React, {useEffect} from 'react';
import Form from './Form';
import '../styles/App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      let welcomeMessage = document.getElementById("welcomeMessage");
      welcomeMessage.innerHTML = "Try Out Our Trivia Generator!";
    }, 3000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="welcomeMessage">Welcome to Numbers Trivia!</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
