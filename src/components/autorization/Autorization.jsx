import React, {useState} from 'react';
import {Dialog, Slide, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Registration = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');

  const handleCreateOne = () => {
    props.setAutorization(false);
    props.setRegistration(true);
  };

  const handleAutorization = () => {
    if (password === '' || email === '') {
      setMessage('Заполните все поля!');
      setOpen(true);
    } else if (!/(?=.*[0-9])(?=.*[A-Za-z]){5,}/.test(password)) {
      setMessage(
        'Введите в поле password не менее 6 латинских символов, минимум 1 из которых является числом'
      );
      setOpen(true);
    } else if (
      !/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setMessage('Введите корректный email, Example: jsmith@example.com');
      setOpen(true);
    } else {
      setEmail('');
      setPassword('');
      setOpen(true);
      setMessage('Вход выполнен успешно!!!');
      setSeverity('success');
      onDialogClose();
    }
  };

  const onDialogClose = () => {
    props.setAutorization(false);
    setTimeout(() => {
      setSeverity('error');
    }, 4000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.autorization}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => onDialogClose()}
      >
        <h3 className="create-header">Create an account</h3>
        <label htmlFor="emailInp" className="modal-header">
          Email
        </label>
        <input
          type="text"
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
        <br/>
        <button className="regBtn" onClick={() => handleAutorization()}>
          Register
        </button>
        <br/>
        <div className="transition">
          <span className="transition-text">No account? </span>
          <span onClick={() => handleCreateOne()} className="transition-mess">
            Create one
          </span>
        </div>
      </Dialog>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Registration;
