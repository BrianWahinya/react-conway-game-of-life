import { MdOutlineDeleteSweep } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TfiBarChartAlt } from "react-icons/tfi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { FaRegCirclePause } from "react-icons/fa6";

const iconsObj = {
  light: <MdLightMode className="light" />,
  dark: <MdDarkMode />,
  clear: <MdOutlineDeleteSweep />,
  //   about: <BsFillInfoCircleFill />,
  about: <FcAbout />,
  chart: <TfiBarChartAlt />,
  play: <IoPlayCircleOutline />,
  restart: <MdOutlineReplayCircleFilled />,
  pause: <FaRegCirclePause />,
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
