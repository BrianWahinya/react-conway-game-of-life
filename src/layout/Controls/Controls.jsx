import { Col, Container, Row } from "reactstrap";
import { Mode } from "../../features";
import Settings from "../Settings/Settings";
import "./css/controls.css";

const Controls = () => {
  return (
    <Container>
      <Row>
        <Col sm={9} md={9}>
          <Settings />
        </Col>
        <Col className="d-flex align-items-end" xs={12} sm={3} md={3}>
          <Mode />
        </Col>
      </Row>
    </Container>
  );
};
export default Controls;
