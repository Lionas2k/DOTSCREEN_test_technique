import {Cell} from "./Cell.jsx";

export function Board({board,onColumnClick}){
    return(
        <>
            <div className={"board"}>
                {board.map((column, colIndex)=>{return(
                    <div className="column" onClick={() => onColumnClick(colIndex)}>
                        {column.map((value)=> {
                            {
                                switch (value) {
                                    case 1:
                                        return <Cell value={1} />
                                    case -1:
                                        return <Cell value={-1} />
                                    default:
                                        return <Cell />
                                }
                            }
                        })}
                    </div>
                )
                })}
            </div>
        </>
    )
}