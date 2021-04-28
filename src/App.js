import Board from "./components/Board";
import Header from "./components/Header";
import { useState } from 'react';
import Reset from "./components/Reset";
import History from "./components/History";

export default function App() {
    const [turn, setTurn] = useState(() => false);
    const [clicked, setClicked] = useState(() => Array(9).fill(false) );
    const [value, setValue] = useState(() => Array(9).fill(null) );
    const [gameOver, setGameOver] = useState( () => checkWinner(value) );
    const [history, setHistory] = useState( () => null );
    const [restored, setRestored] = useState( () => false );

    const resetGame = () => {
        setTurn(false);
        setClicked(Array(9).fill(false));
        setValue(Array(9).fill(null));
        setGameOver(false);
        setHistory(null);
    }

    const cellClicked = (index) => {
        let arr = value.slice();
        let historyCopy = history ? history.slice(): [];
        let clickArr = clicked.slice();
        let winner;
        let current = [turn, gameOver, value, [...clicked]];

        if(restored !== false) {
            historyCopy = historyCopy.slice(0, restored);

            console.log(historyCopy, restored);
        }

        historyCopy.push(current.slice());

        setHistory(historyCopy);

        arr[index] = turn === false ? 'O': 'X';
        clickArr[index] = true;

        setTurn(!turn);
        setValue(arr);

        winner = clickArr.every( click => click ) ? true: checkWinner(arr);
        setGameOver( winner );

        if(winner) {
            clickArr = new Array(clickArr.length).fill(true);
        }

        setClicked(clickArr);
        setRestored(false);
    }

    const returnToPreviousState = ([prevTurn, prevGameState, prevVal, prevClicks], index) => {
        setTurn(prevTurn);
        setGameOver(prevGameState);
        setValue(prevVal);
        setClicked(prevClicks);
        setRestored(index);
    }

    return (
        <div className="container">
            <Header turn={turn} gameOver={ gameOver }/>
            <Board value={value} cellClicked={cellClicked} clicked={clicked} />
            <Reset resetGame={resetGame} />
            <History history={history} returnToPreviousState={returnToPreviousState} />
        </div>
    )
}

function checkWinner(value) {
    let board = [];
    let row = [];

    for(let index = 0; index < value.length; index++) {
        row.push(value[index]);

        if((index + 1) % 3 === 0) {
            board.push(row);
            row = [];
        }
    }

    return hasWon(board, 'O') ? 'O'
        : hasWon(board, 'X') ? 'X'
        : false;
}

function hasWon(board, player) {
    if(board[1][1] === player) {
        if(board[0][0] === player) {
            if(board[2][2] === player) return true;
        } 

        if(board[2][0] === player) {
            if(board[0][2] === player) return true;
        } 

    }

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
            if(board[row][col] !== player) break;
            if(col >= board[row].length - 1) return true;
        }
    }

    for(let col = 0; col < board.length; col++) {
        for(let row = 0; row < board[row].length; row++) {
            if(board[row][col] !== player) break;
            if(row >= board[col].length - 1) return true;
        }
    }

    return false;
}