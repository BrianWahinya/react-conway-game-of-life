import { Select } from "../../components";
import { useAppContext } from "../../context/AppContext.jsx";
import { configs } from "../../helpers/configs";

const Patterns = () => {
  const { pattern, changePattern } = useAppContext();
  return (
    <Select
      id="pattern"
      name="Pattern:"
      options={configs.patterns}
      value={pattern}
      onChange={(e) => changePattern(e.target.value)}
    />
  );
};
export default Patterns;
