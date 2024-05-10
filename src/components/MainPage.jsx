import { Nav, Col, Row } from "react-bootstrap"
import MusicSection from "./MusicSection"

const MainPage = ({ searchQuery }) => {
  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col lg={11} className="mainLinks d-none d-md-flex">
          <Nav.Link href="#TRENDING">TRENDING</Nav.Link>
          <Nav.Link href="#PODCAST">PODCAST</Nav.Link>
          <Nav.Link href="#MOODS AND GENRES">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#NEW RELEASES">NEW RELEASES</Nav.Link>
          <Nav.Link href="#DISCOVER">DISCOVER</Nav.Link>
        </Col>
      </Row>
      {searchQuery && (
        <Row>
          <Col sm={10}>
            <h2 className="text-white">Risultati Ricerca per {searchQuery}</h2>
            <MusicSection artistName={searchQuery} sectionId="searchResults" />
          </Col>
        </Row>
      )}

      <Row>
        <Col sm={10}>
          <h2 className="text-white">Rock Classics</h2>
          <MusicSection artistName="queen" sectionId="rockSection" />
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <h2 className="text-white">Pop Culture</h2>
          <MusicSection artistName="katyperry" sectionId="popSection" />
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <h2 className="text-white">HipHop</h2>
          <MusicSection artistName="eminem" sectionId="hipHopSection" />
        </Col>
      </Row>
    </Col>
  )
}
export default MainPage
