import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";

const iconsObj = {
  play: <IoPlayCircleOutline />,
  restart: <MdReplay />,
  pause: <FaRegCirclePause />,
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
