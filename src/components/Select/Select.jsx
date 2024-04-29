import { Col, FormGroup, Input, Label } from "reactstrap";
import { genRandomId } from "../../helpers/utils";
import "./css/select.css";

const Select = ({ id, name, options, value, onChange }) => {
  return (
    <FormGroup sm={4} md={10} noMargin>
      <Label for={id} sm={2} size="sm">
        {name}
      </Label>
      <Col sm={10}>
        <Input
          id={id}
          name={name}
          type="select"
          value={value}
          onChange={onChange}
          bsSize="sm"
        >
          {options.map((opt) => (
            <option key={genRandomId()} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </Input>
      </Col>
    </FormGroup>
  );
};
export default Select;
