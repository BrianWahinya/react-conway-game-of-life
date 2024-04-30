import { Col, FormGroup, Input, Label } from "reactstrap";
import { genRandomId } from "../../helpers/utils";
import "./css/select.css";

const selectStyle = {
  outline: "none",
  boxShadow: "none",
};

const Select = ({ id, name, options, value, onChange }) => {
  return (
    <FormGroup noMargin style={{ width: "fit-content" }}>
      <Label for={id} sm={2} size="sm">
        {name}
      </Label>
      <Col sm={12}>
        <Input
          id={id}
          name={name}
          type="select"
          value={value}
          onChange={onChange}
          bsSize="sm"
          style={selectStyle}
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
