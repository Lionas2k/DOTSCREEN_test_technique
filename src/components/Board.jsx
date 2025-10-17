import {Cell} from "./Cell.jsx";

export function Board({board}){
    return(
        <>
            <div className={"board"}>
                {board.map((column)=>{return(
                    <div className="column">
                        {column.map((value)=> {
                            return(<Cell value={value}/> )
                        })}
                    </div>
                )
                })}
            </div>
        </>
    )
}