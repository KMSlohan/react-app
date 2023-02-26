import "./App.css"
import React, { useState } from 'react'
import Board from "./components/Board";

function App() {

   /**
   * 첫 번째 인수 : 변수 이름 (getter)
   * 두 번째 인수 : State를 정하는 함수 (setter)
   */
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ] 
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const current = history[history.length - 1] // 최신 동작
  const winner = calculateWinner(current.squares)
  

  let status;
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status =  `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  /**
     * CELL CLICK EVENT
     * 클릭시 X, O 교체 
     * */
  const handleClick = (i) => {
    const newSquares = current.squares.slice()

    if (calculateWinner(newSquares) || newSquares[i]) {
      return
    }

    newSquares[i] = xIsNext ? 'X' : 'O'
    setHistory([...history, { squares : newSquares }])
    // setXIsNext(!xIsNext) // 여러 개의 setXIsNext가 있어도 하나만 실행이 된다.
    setXIsNext(prev => !prev) // 여러 개의 setXIsNext가 있으면 여러 개가 다 실행이 된다. 
  }

  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start'
    return (
      <li key={move}>
        <button>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
