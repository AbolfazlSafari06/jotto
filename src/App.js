import React from 'react';
import GuessWord from './component/guessWord/GuessWord';
import Congrats from './component/congrats/Congrats';
import "./App.css"
class App extends React.Component {
  couns
  render() {
    return (
      <div className='container'>
        <h1>jotto</h1>
        <Congrats success={true} />
        <GuessWord guesseWords={[{ guesseWord: "train", letterMatchCount: 3 }]} />

      </div>
    );
  }
}

export default App;
