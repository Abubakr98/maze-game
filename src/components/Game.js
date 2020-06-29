/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import GameEngine from '../utils/Game';
import Field from './field';
import Steps from './steps';

const GameMain = styled.div`
  background-color: #ffffff99;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height:700px;
`;
const asyncStack = (steps, pushStep) => {
  let i = 0;
  let iId = setInterval(() => {
    pushStep(steps[i]);
    if (steps.length - 1 > i) {
      i++;
    } else {
      clearInterval(iId);
    }
  }, 700);
};

function Game({
  gameField,
  setGameField,
  setSteps,
  pushStep,
  setFinishPos,
  restartGame,
  stepsCount,
}) {
  useEffect(() => {
    const game = new GameEngine(3);
    game.startGame(stepsCount);
    console.log(game.getFinishedField());
    console.log(game.getPathSteps());
    console.log(game.getFinishPos());
    console.log(game.prevStep);
    setFinishPos(game.getFinishPos());
    setSteps([]);
    asyncStack(game.getPathSteps(), pushStep);
    setGameField(game.getField());
  }, [restartGame]);
  

  return (
    <GameMain>
      {gameField ? (
        <>
          <Field />
          <Steps />
        </>
      ) : (
        <CircularProgress />
      )}
    </GameMain>
  );
}

const mapState = (state) => {
  return {
    gameField: state.gameField,
    restartGame: state.restartGame,
    stepsCount: state.stepsCount,
  };
};

const mapDispatch = ({
  gameField: { setGameField },
  steps: { setSteps, pushStep },
  finishPos: { setFinishPos },
}) => ({
  setGameField: (field) => setGameField(field),
  setSteps: (steps) => setSteps(steps),
  pushStep: (step) => pushStep(step),
  setFinishPos: (pos) => setFinishPos(pos),
});
export default connect(mapState, mapDispatch)(Game);
