import { Col, Form, FormGroup, Row } from "reactstrap";
import { CellSize, Patterns, Speed } from "../../features";
import "./css/settings.css";

const Settings = () => {
  return (
    <div className="div-settings">
      <Form>
        <Row className="g-3">
          <Col style={{ maxWidth: "fit-content" }}>
            <Patterns />
          </Col>
          <Col style={{ maxWidth: "fit-content" }}>
            <CellSize />
          </Col>
          <Col style={{ maxWidth: "fit-content" }}>
            <Speed />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Settings;
