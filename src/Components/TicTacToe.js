import Board from "./Board";
import {useState} from "react";
export default function TicTacToe(){

    const [allChangedSquares, setallChangedSquares] = useState([Array(9).fill(null)]);
    const [nextTurn,setnextTurn] = useState(0);
    const [currentInd,setcurrentInd] = useState(0);
    const currentSquares = allChangedSquares[currentInd];

    function onPlay(nextSquares){
        const newUpdatedSquares = [...allChangedSquares.slice(0,currentInd+1), nextSquares];
        setallChangedSquares(newUpdatedSquares);
        setcurrentInd(newUpdatedSquares.length-1);
        setnextTurn(currentInd%2===0);
    }
    function jumpTo(ind){

        setcurrentInd(ind);
        setnextTurn(ind%2 === 0);

    }

    const everyState = allChangedSquares.map((squares,ind)=>{

        let description;

        if(ind>0){description = "GO to move# " + ind;}
        else description = "Start Playing";

        return (
            <>
            <li className="m-3" key={ind}>
            
            <button className="btn btn-primary mt-3" onClick = {() =>jumpTo(ind)}> {description} </button>

            </li>
            </>
        );

    });

    return (
        <>
        <div className="game">
            {/* <p>Ahsanul Anam</p> */}
            <Board squares={currentSquares} nextTurn={nextTurn}  onPlayReference ={onPlay}  />
            <ol className="m-3">{everyState}</ol>
        </div>
        </>
    );

}