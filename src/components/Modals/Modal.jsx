import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal({ modal, handleModal, handleGameStart }) {
  const classes = useStyles();

  const startGame = () => {
    handleGameStart();
    handleModal();
    return;
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modal}
      onClose={() => handleModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Вот, что тебя ждет</h2>
          <p id="transition-modal-description">Двигайся в лабиринте по стрелкам.</p>

          <Button variant="contained" color="primary" onClick={startGame}>
            Понятно, начать игру
          </Button>
        </div>

      </Fade>

    </Modal>

  );
}

const mapState = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatch = ({ modal: { handleModal }, gameStart: { handleGameStart } }) => ({
  handleModal: () => handleModal(),
  handleGameStart: () => handleGameStart(),

});
export default connect(mapState, mapDispatch)(TransitionsModal);