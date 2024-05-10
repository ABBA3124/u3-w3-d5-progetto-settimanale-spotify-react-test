import "./App.css"
import AsideBar from "./components/AsideBar"
import MainPage from "./components/MainPage"
import { Container } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Player from "./components/Player"
import React, { useState } from "react"

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      <Container fluid className="mt-3">
        <AsideBar onSearch={setSearchQuery} />
        <MainPage searchQuery={searchQuery} />
      </Container>
      <Player />
    </div>
  )
}

export default App
