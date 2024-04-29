import { Modal } from "../../components";

const title = "Theme Toggle";

const body = <p>This feature is coming soon &#128521;</p>;

const ThemeToggler = () => {
  return (
    <Modal
      title={title}
      body={body}
      btn={{ icon: "light", cls: "btn-light", name: "Theme" }}
      args={{ className: "modal-theme", size: "sm" }}
    />
  );
};
export default ThemeToggler;
