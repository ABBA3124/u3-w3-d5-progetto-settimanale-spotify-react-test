import next from "../assets/playerbuttons/next.png"
import play from "../assets/playerbuttons/play.png"
import prev from "../assets/playerbuttons/prev.png"
import repeat from "../assets/playerbuttons/repeat.png"
import shuffle from "../assets/playerbuttons/shuffle.png"
import { Container, Row, Col, Image, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"

const Player = () => {
  const song = useSelector((state) => state.player.currentSong)

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className=" flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <Nav.Link href="#">
                  <Image src={shuffle} alt="shuffle" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={prev} alt="prev" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={play} alt="play" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={next} alt="next" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={repeat} alt="repeat" />
                </Nav.Link>
              </div>
              <div className="progress mt-2">
                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}></div>
              </div>
              {song && (
                <div className="text-white mb-5 w-100">
                  <strong>Playing:</strong> {song.title} <strong>Artist:</strong> {song.artist.name}
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Player
