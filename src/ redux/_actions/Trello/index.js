import TrelloType from "../../_type/Trello"

export const addItems = (item, id) => {
  return {
    type: TrelloType.ADD_ITEM,
    payload: { id, item }
  }
}

export const addList = title => {
  return {
    type: TrelloType.ADD_LIST,
    payload: title
  }
}
