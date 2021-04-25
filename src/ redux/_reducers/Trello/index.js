import TrelloType from "../../_type/Trello"

const initState = {
  list: [
    {
      title: "AKenZy",
      card: [
        {
          id: "3",
          content: "Lam An"
        },
        {
          id: "4",
          content: "Lam An"
        },
        {
          id: "5",
          content: "Lam An"
        }
      ]
    },
    {
      title: "AKenZy",
      card: [
        {
          id: "1",
          content: "Lam An"
        },
        {
          id: "5",
          content: "Lam An"
        }
      ]
    },
    {
      title: "AKenZy",
      card: [
        {
          id: "1",
          content: "Lam An"
        },
        {
          id: "2",
          content: "Lam An"
        },
        {
          id: "3",
          content: "Lam An"
        },
        {
          id: "4",
          content: "Lam An"
        },
        {
          id: "5",
          content: "Lam An"
        }
      ]
    },
    {
      title: "AKenZy",
      card: [
        {
          id: "1",
          content: "Lam An"
        },
        {
          id: "2",
          content: "Lam An"
        },
        {
          id: "3",
          content: "Lam An"
        },
        {
          id: "4",
          content: "Lam An"
        },
        {
          id: "5",
          content: "Lam An"
        }
      ]
    },
    {
      title: "AKenZy",
      card: [
        {
          id: "1",
          content: "Lam An"
        },
        {
          id: "2",
          content: "Lam An"
        },
        {
          id: "3",
          content: "Lam An"
        },
        {
          id: "4",
          content: "Lam An"
        },
        {
          id: "5",
          content: "Lam An"
        }
      ]
    }
  ]
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case TrelloType.ADD_ITEM:
      const newList = [...state.list]

      const obj = {
        id: ~~(Math.random() * 100) + "",
        content: action.payload.item
      }
      newList[action.payload.id].card.push(obj)
      return { ...state, list: newList }
    case TrelloType.ADD_LIST:
      console.log("asds")
      // const newList = { ...state.list }
      // const item = {
      //   title: action.payload,
      //   card: []
      // }
      // newList.list.push(item)
      // return { ...state, list: newList }
      return state
    default:
      return state
  }
}
export default reducer
