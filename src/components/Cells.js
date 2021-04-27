export default function Cells( { value, index, click, disabled } ) {
    return (
        <button className="cells" onClick={(e) => {click(index)}} disabled={disabled[index]} >{ value[index] }</button>
    )
}