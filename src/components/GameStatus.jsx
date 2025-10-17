export function GameStatus({gameState,onButtonClick,currentPlayer}){
    return (
        <div className={"gamestatus"}>
            {gameState ? '' :
                <div className={"victory"}>Victoire du joueur {currentPlayer === 1 ? "Jaune" : "Rouge"}</div>}
            {gameState ? '' : <button onClick={onButtonClick}> Rejouer ?</button>}
        </div>
    )
}