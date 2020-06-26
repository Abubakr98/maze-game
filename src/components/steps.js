import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import GameEngine from '../utils/Game'
import {purple} from '@material-ui/core/colors';

const StepsMain = styled.div`

`
const Item = styled.div`

`;

function Steps({gameField}) {

  return (
    <StepsMain>

    </StepsMain>
  );
}

const mapState = (state) => {
  return {
    gameField: state.gameField,
  };
};

const mapDispatch = ({gameField: {setGameField}}) => ({
  setGameField: (field) => setGameField(field),
});
export default connect(mapState, mapDispatch)(Steps);
