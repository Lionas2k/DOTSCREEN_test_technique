import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header.jsx";

function App() {
    /*
    Lorsque currentPlayer vaut 1 -> c'est au joueur Rouge de jouer
    Lorsque currentPlayer vaut -1 -> c'est au joueur Jaune de joueur
     */
    const [currentPlayer,setCurrentPlayer]=useState(1);
    const [redScore,setRedScore]=useState(0);
    const [yellowScore,setYellowScore]=useState(0);
    const scores = [yellowScore,redScore];

  return (
    <>
        <Header currentPlayer={currentPlayer} scores={scores} />
    </>
  )
}

export default App
