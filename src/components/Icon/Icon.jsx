import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";

const iconsObj = {
  play: <IoPlayCircleOutline />,
  restart: <MdReplay />,
  pause: <FaRegCirclePause />,
  about: <BsInfoCircleFill />,
  light: <IoColorPalette />,
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
