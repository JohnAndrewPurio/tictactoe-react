import Cells from "./Cells";

export default function Board( { value, cellClicked, clicked } ) {
    return (
        <div className="board">
            <Cells value={ value } index = '0' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '1' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '2' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '3' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '4' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '5' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '6' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '7' click={cellClicked} disabled={clicked} />
            <Cells value={ value } index = '8' click={cellClicked} disabled={clicked} />
        </div>
    )
}