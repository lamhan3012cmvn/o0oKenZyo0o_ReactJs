import TrelloActionButton from "../TrelloActionButton"
import TrelloCard from "../TrelloCard"
import "./TrelloList.Style.css"
import { useSelector } from "react-redux"

const TrelloList = () => {
  const listTrello = useSelector(state => state.trello.list)
  return (
    <section id="trello_list">
      <div style={{ height: "100vh" }}>
        <div className="trelloContainer">
          {listTrello.map((e, i) => (
            <div className="trelloBx" key={i}>
              <div className="title">
                <h2>{e.title}</h2>
              </div>
              <TrelloCard card={e.card} index={i} />
            </div>
          ))}

          <div className="trelloBx">
            <TrelloActionButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrelloList
