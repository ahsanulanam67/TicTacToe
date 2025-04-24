import Squares from "./Squares";
import {useState} from 'react';

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextTurn,setnextTuren] = useState(0);

    function handClick(){


    }
  return (
    <>
      <h1>This is the TicTacToe Board</h1>
      <div className="board-row">
        <Squares value={squares[0]} onClickReference={handClick}/>
        <Squares value = {squares[1]} onClickReference={handClick} />
        <Squares value={squares[2]} onClickReference={handClick}/>
      </div>
      <div className="board-row">
        <Squares value = {squares[3]} onClickReference={handClick} />
        <Squares value = {squares[4]} onClickReference={handClick}/>
        <Squares value = {squares[5]} onClickReference={handClick}/>

      </div>
      <div className="board-row">       
        <Squares value = {squares[6]} onClickReference={handClick}/>
        <Squares value = {squares[7]} onClickReference={handClick}/>
        <Squares value = {squares[8]} onClickReference={handClick}/>
      </div>
    </>
  );
}
