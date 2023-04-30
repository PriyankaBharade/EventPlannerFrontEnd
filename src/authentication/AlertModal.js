import "../home/modal.css";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useNavigate } from "react-router";

const AlertModal = ({ show, message }) => {
  const navigate = useNavigate();
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Alert
          className="modal-main"
          action={
            <Button
              onClick={() => {
                if (message === "You are Login Successfully") {
                  navigate("/");
                } else {
                  navigate("/login");
                }
              }}
              color="inherit"
              size="small"
            >
              Ok
            </Button>
          }
        >
          {message}
        </Alert>
      </section>
    </div>
  );
};

export default AlertModal;
