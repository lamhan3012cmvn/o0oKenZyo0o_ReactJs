import "./TrelloCard.Style.css"
import TrelloActionButton from "../TrelloActionButton"

const TrelloCard = () => {
  return (
    <>
      <div className="contentBx">
        <ul>
          <li>
            Lam Hoang An Lam Hoang An Lam Hoang An Lam Hoang An Lam Hoang An Lam
            Hoang An
          </li>
          <li>Lam Hoang An</li>
          <li>Lam Hoang An</li>
          <li>Lam Hoang An</li>
          <li>Lam Hoang An</li>
          <li>Lam Hoang An</li>
        </ul>
      </div>
      <TrelloActionButton list={[1]} />
    </>
  )
}

export default TrelloCard
