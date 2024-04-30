import { Col, Container, Row } from "reactstrap";
import { Mode } from "../../features";
import Settings from "../Settings/Settings";
import "./css/controls.css";

const Controls = () => {
  return (
    <Container>
      <Row className="g-2">
        <Col sm={9}>
          <Settings />
        </Col>
        <Col
          className="d-flex align-items-end justify-content-sm-start justify-content-md-end"
          xs={12}
          sm={3}
          md={3}
        >
          <Mode />
        </Col>
      </Row>
    </Container>
  );
};
export default Controls;
