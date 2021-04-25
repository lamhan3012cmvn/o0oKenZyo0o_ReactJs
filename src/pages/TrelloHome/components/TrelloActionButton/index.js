import TextAreaAutoSize from "react-textarea-autosize"
import { useState } from "react"
import { IoAddCircleOutline, IoCloseOutline } from "react-icons/io5"
import "./TrelloActionButton.Style.css"
import { useDispatch } from "react-redux"
import { addItems, addList } from "../../../../ redux/_actions/Trello"

const TrelloActionButton = ({ list, index }) => {
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

  const dispatch = useDispatch()

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
    const AddFrom = () => {
      if (list) {
        dispatch(addItems(textArea, index))
      } else {
        dispatch(addList(textArea))
      }
    }
    const placeholder = list
      ? "Enter List Title..."
      : "Enter a title for this card ..."

    return (
      <div className="fromAdd">
        <TextAreaAutoSize
          minRows={4}
          placeholder={placeholder}
          //
          onChange={changeTitle}
          value={textArea}
          autoFocus
        />
        <div className="btnGroup">
          <p onClick={AddFrom}>Add</p>
          <IoCloseOutline />
        </div>
      </div>
    )
  }

  return openFrom ? renderOpenFrom() : renderAddBtn()
}

export default TrelloActionButton
