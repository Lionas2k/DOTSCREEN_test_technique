import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.jsx";
import {Board} from "./components/Board.jsx";
import {GameStatus} from "./components/GameStatus.jsx";

function App() {
    /*
    Lorsque currentPlayer vaut 1 -> c'est au joueur Rouge de jouer
    Lorsque currentPlayer vaut -1 -> c'est au joueur Jaune de joueur
     */
    const [currentPlayer,setCurrentPlayer]=useState(1);
    const [redScore,setRedScore]=useState(0);
    const [yellowScore,setYellowScore]=useState(0);
    const scores = [yellowScore,redScore];
    const [gameState,setGameState]=useState(true);
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
    /*
        Parcours la colonne dans une direction jusqu'a tomber sur un pion d'une autre couleur OU un mur
        Puis parcours dans l'autre direction suivant les même critères.
        Renvoie true si il y a au moins 4 Pions de la même couleur alignée

     */
    function checkVertical(col,row){
        let count = 0;
        for(let i=row+1;(i>=0&&i<=5);i++){
            if(board[col][i]===currentPlayer){
                count +=1;
            }else{
                break;
            }
        }
        for(let i=row;(i>=0&&i<=5);i--){
            if(board[col][i]===currentPlayer){
                count +=1;
            }else{
                break;
            }
        }
        return(count>=4);
    }
    /*
        Parcours la Ligne dans une direction jusqu'a tomber sur un pion d'une autre couleur OU un mur
        Puis parcours dans l'autre direction suivant les même critères.
        Renvoie true si il y a au moins 4 Pions de la même couleur alignée

     */
    function checkHorizontal(col,row){
        let count = 0;
        for(let i=col;(i>=0&&i<=6);i++){
            if(board[i][row]===currentPlayer){
                count +=1;
            }else{
                console.log(count);
                break;
            }
        }
        for(let i=col-1;(i>=0&&i<=6);i--){
            if(board[i][row]===currentPlayer){
                count +=1;
            }else{
                break;
            }
        }
        return(count>=4);
    }
    /*
        Parcours la Diagonale dans une direction jusqu'a tomber sur un pion d'une autre couleur OU un mur
        Puis parcours dans l'autre direction suivant les même critères.
        Renvoie true si il y a au moins 4 Pions de la même couleur alignée
     */
    function checkDiag1(col,row){
        let count = 0;
        let run =true;
        let i = col;
        let j = row;
        while((i>=0&&i<=6)&&(j>=0&&j<=5)&&run){
            if(board[i][j]===currentPlayer){
                count+=1;
            }else{
                run = false;
            }
            i +=1;
            j +=1;
        }
        i= col-1;
        j=row-1;
        run =true;
        while((i>=0&&i<=6)&&(j>=0&&j<=5)&&run){
            if(board[i][j]===currentPlayer){
                count+=1;
            }else{
                run = false;
            }
            i -=1;
            j -=1;
        }
        return (count>=4);
    }
    /*
        Parcours la Diagonale dans une direction jusqu'a tomber sur un pion d'une autre couleur OU un mur
        Puis parcours dans l'autre direction suivant les même critères.
        Renvoie true si il y a au moins 4 Pions de la même couleur alignée
     */
    function checkDiag2(col,row){
        let count = 0;
        let run =true;
        let i = col;
        let j = row;
        while((i>=0&&i<=6)&&(j>=0&&j<=5)&&run){
            if(board[i][j]===currentPlayer){
                count+=1;
            }else{
                run = false;
            }
            i +=1;
            j -=1;
        }
        i= col-1;
        j=row+1;
        run =true;
        while((i>=0&&i<=6)&&(j>=0&&j<=5)&&run){
            if(board[i][j]===currentPlayer){
                count+=1;
            }else{
                run = false;
            }
            i -=1;
            j +=1;
        }
        return (count>=4)
    }
    function checkDiagonals(col,row){
        return (checkDiag1(col,row)||checkDiag2(col,row));
    }
    /*
        Vérifie si il y a 4 pions alligné en horizontal, vertical, et diagonal
        si c'est le cas, incremente de 1 le score du joueur gagnant et reinitialise le board
     */
    function handleWinning(col,row){
        if(checkVertical(col,row)||checkHorizontal(col,row)||checkDiagonals(col,row)){
            if(currentPlayer>0){
                setRedScore(redScore+1);
            }else{
                setYellowScore(yellowScore+1);
            }
            setGameState(false);
        }
    }
    /*
    Rempli la première case non vide de la colonne en partant de la fin avec la couleur du joueur actif
    ne rempli rien si toute la colonne est pleine
    */
    function onColumnClick(colIndex){
        if(gameState) {
            for (let j = board[0].length - 1; j >= 0; j--) {
                if (!board[colIndex][j]) {
                    board[colIndex][j] = currentPlayer;
                    handleWinning(colIndex, j);
                    setCurrentPlayer(currentPlayer * (-1));
                    break;
                }
            }
        }
    }
    function onButtonClick(){
        setBoard(initialBoard);
        setGameState(true);
    }
  return (
    <>
        <Header currentPlayer={currentPlayer} scores={scores} />
        <Board board={board} onColumnClick={onColumnClick}/>
        <GameStatus gameState={gameState} currentPlayer={currentPlayer} onButtonClick={onButtonClick}/>
    </>
  )
}

export default App
