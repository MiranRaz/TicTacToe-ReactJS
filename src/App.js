import React, { useEffect, useState } from "react";
import SquareComponent from "./SquareComponent";
import "./App.css";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState);
  const [isX, updateIsX] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isX ? "x" : "o";
    updateIsX(!isX);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Player ${winner} won!`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      {/* <p className="heading-text"> Tic Tac Toe </p> */}
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <SquareComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <SquareComponent
          className="b-bottom"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <SquareComponent
          className="b-bottom-right"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <SquareComponent
          className="b-bottom"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-right"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <SquareComponent
          className="b-right"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <SquareComponent
          onClick={() => onUserClicked(8)}
          state={gameState[8]}
        />
      </div>
      <button className="btn" onClick={clearGame}>Reset</button>
      <a href="https://miranraz.github.io/MyPortfolio/" className="lnk">
        HOME
      </a>
    </div>
  );
}

export default App;
