import { Button as CustomButton } from "reactstrap";

const Button = ({ name, ...args }) => {
  return (
    <CustomButton color="mode" {...args}>
      {name}
    </CustomButton>
  );
};
export default Button;
