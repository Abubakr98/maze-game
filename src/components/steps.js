import React from 'react';
import {connect} from "react-redux";
import Collapse from '@material-ui/core/Collapse';
import styled from "styled-components";

import {lightGreen} from '@material-ui/core/colors';

const StepsMain = styled.div`
    width: 520px;
    min-height: 200px;
`
const Item = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-color: ${lightGreen[500]};
    margin: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
`;

function Steps({steps, animateSteps}) {
  // const [checked, setChecked] = React.useState(true);
  const stepsArrows = {
    'up': '↑',
    'down': '↓',
    'left': '←',
    'right': '→'
  }
  return (
    <>
      <Collapse timeout={300} in={animateSteps}>

        <StepsMain>
          {
            steps.map((el, i) => {
              return <Item key={i}>{stepsArrows[el]}</Item>
            })
          }
        </StepsMain>
      </Collapse></>
  );
}

const mapState = (state) => {
  return {
    steps: state.steps,
    animateSteps: state.animateSteps
  };
};

export default connect(mapState)(Steps);
