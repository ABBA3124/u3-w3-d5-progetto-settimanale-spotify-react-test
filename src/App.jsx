import "./App.css"
import AsideBar from "./components/AsideBar"
import MainPage from "./components/MainPage"
import { Container, Row } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Player from "./components/Player"

function App() {
  return (
    <div>
      <Container fluid className="mt-3">
        <AsideBar />
        <MainPage />
      </Container>
      <Player />
    </div>
  )
}

export default App
