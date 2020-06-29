import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { purple } from '@material-ui/core/colors';

const Cell = styled(Button)`
  margin: 10px !important;
  width: 100px !important;
  height: 100px !important;
  font-size: 1.5rem !important;
  background-color: ${purple[400]} !important;
  &:hover {
    background-color: ${purple[700]} !important;
  }
`;

function Field({
  gameField,
  finishPos,
  setRestartGame,
  setAnimateSteps,
  steps,
  stepsCount
}) {
  const [show, setShow] = useState({ pos: { i: -1, j: -1 }, show: false });
  const { i: fI, j: fJ } = finishPos;
  console.log(fI, fJ);
  const anwerHendler = (e, { i, j }) => {
    if(steps.length===stepsCount){
    if (i === fI && j === fJ) {
      setShow({show:true, pos:{ i, j }});
      setAnimateSteps();     
      setTimeout(() => {
        setRestartGame();
        setAnimateSteps();
        setShow({show:false, pos:{ i, j }});
      }, 1000);
    }else{
      setShow({show:true, pos:{ i, j }});
      setAnimateSteps();
      setTimeout(() => {
        setRestartGame();
        setAnimateSteps();
        setShow({show:false, pos:{ i, j }});
      }, 1000);
    }
  }else{
    alert('Не спеши!')
  }
  };
  const isRight = ({ i, j }) => {
    if (i === fI && j === fJ) {
      return '👍';
    }
    return '👎';
  };
  return (
    <div>
      {
        gameField.map((el, i) => {
          return (
            <div key={i}>
              {el.map((el, j) => {
                return (
                  <Cell
                    key={j}
                    variant='contained'
                    onClick={(e) => anwerHendler(e, { i, j })}
                    color='primary'
                  >
                    {el === 1 ? 'Старт' : null}
                    {show.show && show.pos.i === i && show.pos.j === j
                      ? isRight({ i, j })
                      : null}
                  </Cell>
                );
              })}
            </div>
          );
        })
      }
    </div>
  );
}

const mapState = (state) => {
  return {
    gameField: state.gameField,
    finishPos: state.finishPos,
    animateSteps: state.animateSteps,
    steps: state.steps,
    stepsCount: state.stepsCount,
  };
};

const mapDispatch = ({
  restartGame: { setRestartGame },
  animateSteps: { setAnimateSteps },
}) => ({
  setRestartGame: () => setRestartGame(),
  setAnimateSteps: () => setAnimateSteps(),
});
export default connect(mapState, mapDispatch)(Field);
