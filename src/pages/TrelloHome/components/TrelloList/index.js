import TrelloActionButton from "../TrelloActionButton"
import TrelloCard from "../TrelloCard"
import "./TrelloList.Style.css"
const TrelloList = () => {
  return (
    <section id="trello_list">
      <div className="trelloBx">
        <div className="title">
          <h2>Lam Lam</h2>
        </div>
        <TrelloCard />
      </div>
      <div className="trelloBx">
        <div className="title">
          <h2>Lam Lam</h2>
        </div>
        <TrelloCard />
      </div>

      <div className="trelloBx">
        <TrelloActionButton />
      </div>
    </section>
  )
}

export default TrelloList
