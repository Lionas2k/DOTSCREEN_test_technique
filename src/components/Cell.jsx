export function Cell({value}){


    const circleStyle = {
        backgroundColor:
            value === 1 ? "red" :
                value === -1 ? "yellow" :
                    "white",
    };

    return (
        <div className={"cell"}>
            <div className={"circle"} style={circleStyle}></div>
        </div>
    );
}