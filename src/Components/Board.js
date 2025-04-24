import Squares from "./Squares";
// import {useState} from 'react';

export default function Board({squares, nextTurn, onPlayReference}) {

  

    function handClick(ind){

      if(squares[ind] || winner)return;
        const nextSquares = squares.slice();

        if(nextTurn){

          nextSquares[ind] = 'X';
        }
        else {
          nextSquares[ind] = 'O';
        }
        
        onPlayReference(nextSquares);

    }

    const winner = whoisthewinner(squares);

    let status;

    if(winner === "Draw"){
      status = "This match is drawn";
    }
    else if(winner){
      status = "Winner is " + winner;
    }

    else status = "Next turn is for : " + (nextTurn ? 'X':'O');

  return (
    <>
      <h1>Lets play the popular TicTacToe</h1>
      <div className="board-row">
        <Squares value={squares[0]} onClickReference={()=>handClick(0)}/>
        <Squares value = {squares[1]} onClickReference={() => handClick(1)} />
        <Squares value={squares[2]} onClickReference={() => handClick(2)}/>
      </div>
      <div className="board-row">
        <Squares value = {squares[3]} onClickReference={() => handClick(3)} />
        <Squares value = {squares[4]} onClickReference={() => handClick(4)}/>
        <Squares value = {squares[5]} onClickReference={() => handClick(5)}/>

      </div>
      <div className="board-row">       
        <Squares value = {squares[6]} onClickReference={() => handClick(6)}/>
        <Squares value = {squares[7]} onClickReference={() => handClick(7)}/>
        <Squares value = {squares[8]} onClickReference={() => handClick(8)}/>
      </div>
      <div>

        <p>{status}</p>
      </div>
      
    </>
  );
}

function whoisthewinner(squares){

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

  for(let i=0;i<lines.length;i++){

      const [a,b,c] = lines[i];

      if(squares[a] && squares[a]===squares[b] && squares[b] === squares[c])return squares[a];
      
  }
  let c = 0;
  for(let i = 0;i<squares.length;i++){

      if(squares[i])c++;
  }
  if(c === squares.length)return "Draw";


}
