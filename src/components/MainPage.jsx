import { Nav, Col, Row } from "react-bootstrap"

const MainPage = () => {
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
      <Row>
        <Col sm={10}>
          <div id="rock">
            <h2>Rock classNameics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection"></Row>
          </div>
        </Col>
      </Row>
    </Col>
  )
}
export default MainPage
