import TextAreaAutoSize from "react-textarea-autosize"
import { useState } from "react"
import { IoAddCircleOutline, IoCloseOutline } from "react-icons/io5"
import "./TrelloActionButton.Style.css"

const TrelloActionButton = ({ list }) => {
  const btnText = list ? "Add another list" : "Add another card"
  const btnColor = list ? "#FFF" : "#000"
  const btnBackground = list ? "rgba( 255, 255, 255, 0.2 )" : "#FFF"

  const [openFrom, setOpenFrom] = useState(false)
  const OpenFrom = () => setOpenFrom(!openFrom)
  const CloseFrom = () => setOpenFrom(false)

  const [textArea, setTextArea] = useState("")
  const changeTitle = e => {
    setTextArea(e.target.value)
  }
  const renderAddBtn = () => {
    return (
      <div
        style={{ color: btnColor, background: btnBackground }}
        className="btnActionTrello"
        onClick={OpenFrom}
      >
        <IoAddCircleOutline />
        <p>{btnText}</p>
      </div>
    )
  }

  const renderOpenFrom = () => {
    const placeholder = list
      ? "Enter List Title..."
      : "Enter a title for this card ..."

    return (
      <div className="fromAdd">
        <TextAreaAutoSize
          placeholder={placeholder}
          onBlur={CloseFrom}
          onChange={changeTitle}
          value={textArea}
          autoFocus
        />
        <div className="btnGroup">
          <p>Add</p>
          <IoCloseOutline />
        </div>
      </div>
    )
  }

  return openFrom ? renderOpenFrom() : renderAddBtn()
}

export default TrelloActionButton
