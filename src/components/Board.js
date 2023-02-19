import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () => {

  /**
   * 첫 번째 인수 : 변수 이름 (getter)
   * 두 번째 인수 : State를 정하는 함수 (setter)
   */
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`
  const handleClick = (i) => {
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    // setXIsNext(!xIsNext) // 여러 개의 setXIsNext가 있어도 하나만 실행이 된다.
    setXIsNext(prev => !prev) // 여러 개의 setXIsNext가 있으면 여러 개가 다 실행이 된다.
    
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  /**
   * Class component에서는 render() 안에 return()
   * class component에서 render()는 컴포넌트를 렌더링 하는 메소드
   * 함수형 컴포넌트에서는 render() 없이 바로 return()
   */
    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
}

// 함수형 컴포넌트에서 export 시키기
export default Board