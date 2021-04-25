import { createStore, combineReducers } from "redux"

import rootReducers from "./_reducers/index"

const reducer = combineReducers({ ...rootReducers })

const store = createStore(reducer)

export default store
