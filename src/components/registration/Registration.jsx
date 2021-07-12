import React, {useState} from "react";
import {
  Dialog
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import "./Registration.sass";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Registration = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const handleSingIn = () => {
    props.setRegistration(false);
    props.setAutorization(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRegistration = () => {
    if (name === "" || password === "" || email === "") {
      setMessage("Заполните все поля!");
      setOpen(true);
    } else if (name.length < 6) {
      setMessage("Минимальное колличество символов для Name = 6");
      setOpen(true);
    } else if (!/(?=.*[0-9])(?=.*[A-Za-z]){5,}/.test(password)) {
      setMessage(
        "Введите в поле password не менее 6 латинских символов, минимум 1 из которых является числом"
      );
      setOpen(true);
    } else if (!/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setMessage(
        "Введите корректный email, Example: jsmith@example.com"
      );
      setOpen(true);
    } else {
      // addNewUser();
      localStorage.setItem("user", name);
      setName("");
      setEmail("");
      setPassword("");
      setOpen(true);
      setMessage(
        "Вы успешно зарегестрированны!!!"
      );
      setSeverity("success");
      props.setUser(localStorage.getItem('user'));
      onDialogClose();
      props.handleLogin();
    }
  }

  const onDialogClose = () => {
    setTimeout(() => {
      setSeverity("error");
    }, 4000);
    props.setRegistration(false);
  }

  return (
    <div>
      <Dialog
        open={props.registration}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => onDialogClose()}
      >
        <h3 className="create-header">Create an account</h3>
          <label htmlFor="nameInp" className="modal-header">
            Name
          </label>
          <input
            type="text"
            id="nameInp"
            value={name}
            placeholder="Your name"
            className="modal-inp"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="emailInp" className="modal-header">
            Email
          </label>
          <input
            type="email"
            id="emailInp"
            value={email}
            placeholder="Your email"
            className="modal-inp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="passInp" className="modal-header">
            Password
          </label>
          <input
            type="password"
            id="passInp"
            value={password}
            placeholder="Enter your password"
            className="modal-inp"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="regBtn" onClick={() => handleRegistration()}>
            Register
          </button>
          <div className="transition">
            <p className="transition-text">Do you already have an account?</p>
            <p onClick={() => handleSingIn()} className="transition-mess">
              Sing in
            </p>
          </div>
      </Dialog>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Registration;
