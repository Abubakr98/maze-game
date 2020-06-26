import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Modal from "./components/Modals/Modal";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Game from "./components/Game";

const AppMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App({ modal, handleModal, gameStart}) {
  return (
    <AppMain>
      <Modal/>
      {
        gameStart ? (<Game/>) : (
          <Button style={{display: modal ? 'none' : 'inline-block'}} variant="contained" color="primary"
                  onClick={() => handleModal()}>
            Начать игру
          </Button>)
      }
    </AppMain>
  );
}

const mapState = (state) => {
  return {
    modal: state.modal,
    gameStart: state.gameStart
  };
};

const mapDispatch = ({modal: {handleModal}}) => ({
  handleModal: () => handleModal(),
});
export default connect(mapState, mapDispatch)(App);
