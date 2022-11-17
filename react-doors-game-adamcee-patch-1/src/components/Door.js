import { useState } from "react";
import GiftImage from "../images/gift.png"

function Door(props) {
  // states
  const [opened, setOpened] = useState(false)
  
  // events
  const toggleDoor = () => {
    setOpened((prevOpened) => { return !prevOpened })
    props.updateResult(props.number)
  }

  // renders  
  const getDoorStateStyle = () => {
    return " " + (opened ? "door-opened" : "door-closed")
  }

  const renderImage = () => {
    return opened && props.isPrizeDoor
      ? <img id="image-prize" src={GiftImage} alt="prize" />
      : null
  }

  return (
    <div className={"door " + getDoorStateStyle()} onClick={toggleDoor}>
      <div>Door { props.number }</div>
      { renderImage() }
    </div>
  )
}

export default Door;