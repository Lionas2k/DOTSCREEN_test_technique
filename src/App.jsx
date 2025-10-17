import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.jsx";
import {Board} from "./components/Board.jsx";

function App() {
    /*
    Lorsque currentPlayer vaut 1 -> c'est au joueur Rouge de jouer
    Lorsque currentPlayer vaut -1 -> c'est au joueur Jaune de joueur
     */
    const [currentPlayer,setCurrentPlayer]=useState(1);
    const [redScore,setRedScore]=useState(0);
    const [yellowScore,setYellowScore]=useState(0);
    const scores = [yellowScore,redScore];
    /*
    initialBoard represente le plateau de jeu vide.
    il est rempli de 0 ce qui correspond a une case vide.
    -1 correspond a une case controlée par le joueur Jaune.
    1 correspond a une case controlée par le joueur Rouge.
     */
    const initialBoard = [];
    for (let i=0;i<7;i++){
        let row = [];
        for (let j=0;j<6;j++){
            row.push(0);
        }
        initialBoard.push(row);
    }
    const [board,setBoard]=useState(initialBoard);

    function onColumnClick(colIndex){
        for (let j = board[0].length-1; j >= 0; j--) {
            if (!board[colIndex][j]) {
                board[colIndex][j] = currentPlayer;
                setCurrentPlayer(currentPlayer * (-1));
                break;
            }
        }
    }
  return (
    <>
        <Header currentPlayer={currentPlayer} scores={scores} />
        <Board board={board} onColumnClick={onColumnClick}/>
    </>
  )
}

export default App
