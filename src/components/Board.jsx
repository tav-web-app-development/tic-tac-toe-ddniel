import { useState } from "react"
import "./Board.css"

export default function Board () {
     

    function handleReset(){
        setBoardValues({...boardValues, 1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:''})   
    }
    

    // Dijo que tengo que hacer de nuevo porque hay que mantener el array en ek estado y cambiar todo de acuerdo a eso.
    const [boardValues, setBoardValues] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',

    })
    const [isX, setIsX] = useState(false)



    


   

    return(
    <div className="boardContainer">
        <h2 className="title">Tic Tac Toe</h2>
        <div id="board">
            <button className="square" onClick={() => setBoardValues({...boardValues, 1: !isX?'O':'X'}, setIsX(!isX))}>{boardValues[1]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 2: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[2]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 3: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[3]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 4: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[4]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 5: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[5]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 6: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[6]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 7: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[7]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 8: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[8]}</button>
            <button className="square" onClick={() => setBoardValues({...boardValues, 9: !isX?'O':'X'}, setIsX(!isX))}> {boardValues[9]}</button>
        </div>

        <button className="resetBtn" onClick={handleReset} >Clear</button>
    </div>
    )
}

// export default function Board () {

//     const boardArr = ["", "", "", "", "", "", "", "", ""]

//     const boardJsx = boardArr.map((board) => (
//         <button className="square" key={board}></button>
//       ));

//     const [mark, setMark] = useState("X")

//     function handleClick(e){
//         mark == "X" ? setMark("O"): setMark('X')
//         e.target.innerText = mark
//     }

//     function handleClear(){

//     }

   

//     return(
//     <>
//         <div id="board">
//             <button className="square" onClick={(e)=> handleClick(e)}></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//             <button className="square" onClick={(e)=> handleClick(e)} ></button>
//         </div>

//         <button>Clear</button>
//     </>
//     )
// }