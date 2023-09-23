import "./styles.css";
import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const handleModel = () => {
    setToggle(!toggle);
  };
  const modelState = toggle ? "Hide" : "Show";

  return (
    <div className="App">
      <button onClick={handleModel}>{modelState} Modal</button>

      <Modal show={toggle} title="Modal test" onClose={handleModel}>
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  const handleWrapperClick = (event) => {
    // Prevent closing the modal when clicking inside the modal wrapper
    event.stopPropagation();
  };
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}>
          <div
            className={`modal-wrapper ${show ? "active" : ""}`}
            onClick={handleWrapperClick}
          >
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div className="modal-close" onClick={onClose}>
                X
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </>
    )
  );
};
