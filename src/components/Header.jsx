export function Header({currentPlayer,scores}){
    return(
        <div className={"header"}>
            <div className={"playturn"}>
                C'est au joueur {currentPlayer===1?'Rouge':'Jaune'} de jouer !
            </div>
            <div className={"scores"}>
                Rouge {scores[0]} - {scores[1]} Jaune
            </div>
        </div>
    )
}