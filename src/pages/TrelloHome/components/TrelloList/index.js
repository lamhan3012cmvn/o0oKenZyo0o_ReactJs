import TrelloActionButton from "../TrelloActionButton"
import "./TrelloList.Style.css"
const TrelloList = () => {
  return (
    <section id="trello_list">
      <div className="trelloBx">
        <div className="title">
          <h2>Lam Lam</h2>
        </div>
        <div className="contentBx">
          <ul>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
          </ul>
        </div>
        <TrelloActionButton list={[1]} />
      </div>
      <div className="trelloBx">
        <div className="title">
          <h2>Lam Lam</h2>
        </div>
        <div className="contentBx">
          <ul>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
          </ul>
        </div>
      </div>
      <div className="trelloBx">
        <div className="title">
          <h2>Lam Lam</h2>
        </div>
        <div className="contentBx">
          <ul>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
            <li>Lam Hoang An</li>
          </ul>
        </div>
      </div>
      <div className="trelloBx">
        <TrelloActionButton />
      </div>
    </section>
  )
}

export default TrelloList
