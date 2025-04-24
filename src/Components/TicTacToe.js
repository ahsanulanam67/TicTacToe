import Board from "./Board";
import {useState} from "react";
export default function TicTacToe(){

    const [allChangedSquares, setallChangedSquares] = useState([Array(9).fill(null)]);
    const [nextTurn,setnextTurn] = useState(0);
    const currentSquares = allChangedSquares[allChangedSquares.length-1];

    function onPlay(nextSquares){

        setallChangedSquares([...allChangedSquares, nextSquares]);
        setnextTurn(!nextTurn);

    }
    return (
        <>
        <div className="game">
            <p>Ahsanul Anam</p>
            <Board squares={currentSquares} nextTurn={nextTurn}  onPlayReference ={onPlay}  />
        </div>
        </>
    );

}