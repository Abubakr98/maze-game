import React from 'react';
import {connect} from "react-redux";

function BeforeGame({gameField, setGameField}) {
  console.log(gameField, setGameField)
  return (
    <div className="BeforeGame">

    </div>
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
export default connect(mapState, mapDispatch)(BeforeGame);
