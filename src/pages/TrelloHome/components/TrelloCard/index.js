import "./TrelloCard.Style.css"
import TrelloActionButton from "../TrelloActionButton"

const TrelloCard = props => {
  const { card, index } = props

  const render = () => {
    return (
      <>
        <div className="contentBx">
          <ul>
            {card.map(e => (
              <li key={`${e.id}+${Math.random() * 20}`}>{e.content}</li>
            ))}
          </ul>
        </div>
        <TrelloActionButton list={card} index={index} />
      </>
    )
  }
  return card && render()
}

export default TrelloCard
