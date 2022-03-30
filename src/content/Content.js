import {Container, Row, Col, Button} from "react-bootstrap";
import catIcon from './cat-icon.svg';
import pawsIcon from './paws-icon.svg';
import pet1 from './pet1.png';
import pet2 from './pet2.png';
import pet3 from './pet3.png';

function Content(props) {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <div>Care deserved by your pets</div>
            <div>With respect</div>
            <div>
              <img alt="Paws"
                   src={pawsIcon}
                   width="30"
                   height="30"
                   className="d-inline-block"/>
              <span>to our</span>
            </div>
            <div>
              <span>littles</span>
              <img alt="Paws"
                   src={catIcon}
                   width="30"
                   height="30"
                   className="d-inline-block"/>
            </div>
            <Row>
              <Col xs={6}>
                <Button variant="primary">Request an appointment</Button>
              </Col>
              <Col xs={6}>
                <Button variant="link">Call doctor</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={4}>
                <img alt="Pet1" src={pet1}></img>
              </Col>
              <Col xs={4}>
                <img alt="Pet2" src={pet2}></img>
              </Col>
              <Col xs={4}>
                <img alt="Pet3" src={pet3}></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default Content;