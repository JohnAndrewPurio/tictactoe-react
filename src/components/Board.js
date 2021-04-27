import Cells from "./Cells";

export default function Board( { turn, setTurn, clicked, setClicked, value, setValue, setGameOver, checkWinner } ) {
    const cellClicked = (index) => {
        let arr = value.slice();
        let clickArr = clicked.slice();
        let winner;

        arr[index] = turn === false ? 'O': 'X';
        clickArr[index] = true;

        setTurn(!turn);
        setValue(arr);

        winner = checkWinner(arr);

        if(winner) {
            clickArr = new Array(clickArr.length).fill(true);
        }

        if(clickArr.every( click => click )) {
            winner = true;
        }

        setGameOver( winner );
        setClicked(clickArr);
    }

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