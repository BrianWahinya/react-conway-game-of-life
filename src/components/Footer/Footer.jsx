import { Container } from "reactstrap";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="container-md">
        <p className="pSource">
          Currently in development:{" "}
          <a
            href="https://github.com/BrianWahinya/react-conway-game-of-life"
            rel="noopener noreferrer"
          >
            Github-Link
          </a>
        </p>
        <p className="pCopyright">
          <span>{new Date().getFullYear()} &copy;</span>
          <a href="https://brianwebportal.netlify.app" target="_blank">
            {" "}
            Brian Wahinya{" "}
          </a>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
