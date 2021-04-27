import Board from "./components/Board";
import Header from "./components/Header";
import { useState } from 'react';
import Reset from "./components/Reset";

export default function App() {
    const [turn, setTurn] = useState(() => false);
    const [clicked, setClicked] = useState(() => Array(9).fill(false) );
    const [value, setValue] = useState(() => Array(9).fill(null) );
    const [gameOver, setGameOver] = useState( () => checkWinner(value) );
    const resetGame = () => {
        setTurn(false);
        setClicked(Array(9).fill(false));
        setValue(Array(9).fill(null));
        setGameOver(false);
    }

    return (
        <div className="container">
            <Header turn={turn} gameOver={ gameOver }/>
            <Board turn={turn} setTurn={setTurn} clicked={clicked} 
                    setClicked={setClicked} value={ value } setValue={setValue} 
                    setGameOver={ setGameOver } checkWinner ={ checkWinner } />
            <Reset resetGame={resetGame} />
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