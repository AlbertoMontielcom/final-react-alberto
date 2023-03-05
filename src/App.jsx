import CatImage from "./components/CatImage"
import VideoBg from "./components/VideoBg"
import Avatar from "./components/Avatar"
import CardList from "./components/CardList"
import './style/App.css'

function App() {
  
  return (
    <div className="App">
      <VideoBg/>
      <div className="content-wrapper">
      <div className="content">
        <Avatar/>
      <div className="caty">
        <CatImage/>
      </div>
      <CardList/>
    </div>
    </div>
    </div>
  )
}

export default App
