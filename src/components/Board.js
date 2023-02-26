import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    return <Square value={squares[i]} 
      onClick={() => onClick(i)} />
  }



  /**
   * Class component에서는 render() 안에 return()
   * class component에서 render()는 컴포넌트를 렌더링 하는 메소드
   * 함수형 컴포넌트에서는 render() 없이 바로 return()
   */
    return (
      <div>
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