
export default function Header( {turn, gameOver} ) {
    console.log(gameOver);

    return (
        <div className="header">
            <h2>Tic-Tac-Toe</h2>
            <p> { gameOver === 'X' ? 'X has won!'
                : gameOver === 'O' ? 'O has won!'
                : gameOver ? 'Game Drawn'
                : `It is ${turn ? 'X': 'O'}'s turn` }</p> 
        </div>
    )
}