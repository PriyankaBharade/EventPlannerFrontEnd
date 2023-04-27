import { CircularProgress } from "@mui/material";
import "./modal.css";

const Modal = ({show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <CircularProgress />
      </section>
    </div>
  );
};

export default Modal;
