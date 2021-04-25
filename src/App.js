import "./App.css"
import TrelloHome from "./pages/TrelloHome"
import { Provider } from "react-redux"
import store from "./ redux/index"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TrelloHome />
      </div>
    </Provider>
  )
}

export default App
