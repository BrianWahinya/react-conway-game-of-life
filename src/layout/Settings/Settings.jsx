import { Col, Form, FormGroup, Row } from "reactstrap";
import { CellSize, Patterns, Speed } from "../../features";
import "./css/settings.css";

const Settings = () => {
  return (
    <div className="div-settings">
      <Form>
        <Row className="g-0">
          <Col sm={4}>
            <Patterns />
          </Col>
          <Col sm={4}>
            <CellSize />
          </Col>
          <Col sm={4}>
            <Speed />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Settings;
