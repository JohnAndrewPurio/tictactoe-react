export default function History( {history, returnToPreviousState} ) {
    return (
        <div className="history">
            <h3 className="absolute">History</h3>
            {
                history ? history.map( (move, index) => {
                        return (
                            <button key={index} className={`move${index}`} 
                                onClick={() => returnToPreviousState(move, index)}> 
                                    {index > 0 ? `Go to Move ${index}` : 'Move to start'}
                                </button> 
                        ) 
                    })
                    : <p>Empty</p>
            }
        </div>
    )
}