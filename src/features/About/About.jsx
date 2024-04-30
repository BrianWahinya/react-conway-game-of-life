import { Accordion, Modal } from "../../components";
import "./css/about.css";

const title = "Conway's Game of Life";
const contentContext = (
  <>
    <p>
      Developing an app that aims to implement and visualize Conway's Game of
      Life rules.
    </p>
    <ol>
      <li>
        Any live cell with fewer than two live neighbors dies, as if by
        underpopulation
      </li>
      <li>
        Any live cell with two or three live neighbors lives on to the next
        generation.
      </li>
      <li>
        Any live cell with more than three live neighbors dies, as if by
        overpopulation.
      </li>
      <li>
        Any dead cell with exactly three live neighbors becomes a live cell, as
        if by reproduction.
      </li>
    </ol>
    <p>
      For more info on this:&nbsp;
      <a
        href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
        target="_blank"
        rel="noreferrer noopener"
      >
        wikipedia-conway-game
      </a>
      .
    </p>
  </>
);

const contentGeeks = (
  <>
    <h6 id="code">Code</h6>
    <p>
      This project is hosted using&nbsp;
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Netlify
      </a>
      .
    </p>
    <p>
      The Github project repository is:{" "}
      <a
        href="https://github.com/BrianWahinya/react-conway-game-of-life"
        target="_blank"
      >
        repo-link
      </a>
      .
    </p>

    <h6 id="local-deployment">Local Deployment</h6>
    <p>
      Please remember to install all dependencies in the package.json file first
      before running the application.
      <br />
      From the project folder, open the command-line execute the command:
    </p>
    <h5 id="-npm-i-">
      <code>npm i</code>
    </h5>
    <p>Then run:</p>
    <h5 id="-npm-start-">
      <code>npm run dev</code>
    </h5>
    <p>
      This runs the app in the development mode.
      <br />
      Open{" "}
      <a href="http://localhost:5173" target="_blank" disabled>
        http://localhost:5173
      </a>{" "}
      to view it in your browser.
    </p>
    <p>
      The page will reload when you make changes.
      <br />
      You may also see lint errors in the console.
    </p>
  </>
);

const accordItems = [
  { id: "accord-context", header: "Context", content: contentContext },
  { id: "accord-geeks", header: "Fellow Geeks", content: contentGeeks },
];

const body = (
  <>
    <p>
      Game of Life is a concept derived from cellular automation and was
      invented in 1970 by mathematician John Conway.
    </p>
    <Accordion accordItems={accordItems} />
  </>
);

const About = () => {
  return (
    <Modal
      title={title}
      body={body}
      btn={{ icon: "about", cls: "btn-about", name: "App-Info" }}
      args={{
        className: "modal-about",
        size: "lg",
        color: "link",
        style: { color: "lightgrey" },
      }}
    />
  );
};
export default About;
