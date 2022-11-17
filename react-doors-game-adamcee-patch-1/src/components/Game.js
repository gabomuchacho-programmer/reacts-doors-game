import { useState } from "react"
import Door from "./Door"
function Game(props) {
  // states
  const [prizeDoor, /*setPrizeDoor*/] = useState(Math.floor(Math.random() * props.numDoors) + 1)
  const [result, setResult] = useState(null)
  // events
  const updateResult = (door) => {
    if (result !== null)
      return
    setResult(door === prizeDoor)
  }
  const startNewGame = () => {
    window.location.reload();
  }
  // renders
  const renderDoors = () => {
    let doorElements = []
    for (let i = 1; i <= props.numDoors; i++) {
      doorElements.push(
        <Door
          key={i} 
          number={i} 
          isPrizeDoor={i === prizeDoor}
          updateResult={updateResult}
        />
      )
    }
    return doorElements
  }
  const renderResult = (allDoors) => {
    function openAllDoors(allDoors){
      for (let i=0; i<allDoors.length; i++){

        //below is our attempt to open all doors if there are closed once a door has been selected, but not sure why we can't call these door functions on the door object
        // if(allDoors[i].getDoorsStateStyle() == ' door-closed') {
        //   allDoors[i].toggleDoor()  
        // }


      }
    }
    if (result === null)
      return ""
    openAllDoors(allDoors) //runs the function above passing in the array of doors into the openAllDoors function written a few lines above
    console.log(allDoors) //confirms allDoors is actually the array of door objects
    return (
      result 
        ? <p className="result-win">You win!!!</p>
        : <p className="result-lose">You lose!!</p>
    )
  }
  const doorsRendered = renderDoors() //storing the array of doors to this variable so we can pass it through our render result method further below
  return (
    <div className="center-container">
      <h3>Choose a door:</h3>
      <div id="door-container">
        { doorsRendered }
      </div>
      <div>
        <button className="btn" onClick={startNewGame}>New Game</button>
      </div>
      <div>
        { renderResult(doorsRendered) }
      </div>
    </div>
  )
}
export default Game;