export default function Reset( {resetGame} ) {

    return (
        <div className="reset">
            <button onClick={resetGame} >Reset</button>
        </div>
    )
}