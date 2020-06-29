export const modal = {
  state: false,
  reducers: {
    handleModal(state) {
      return !state;
    }
  }
};
export const gameStart = {
  state: false,
  reducers: {
    handleGameStart(state) {
      return !state;
    }
  }
};
export const finishPos = {
  state: null,
  reducers: {
    setFinishPos(state, payload) {
      return payload;
    }
  }
};
export const restartGame = {
  state: 0,
  reducers: {
    setRestartGame(state) {
      return state += 1;
    }
  }
};
export const stepsCount = {
  state: 10,
  reducers: {
    setStepsCount(state, payload) {
      return payload;
    }
  }
};
export const animateSteps = {
  state: true,
  reducers: {
    setAnimateSteps(state) {
      return !state;
    }
  }
};
export const gameField = {
  state: null,
  reducers: {
    setGameField(state, payload) {
      return payload;
    }
  }
};
export const steps = {
  state: [],
  reducers: {
    setSteps(state, payload) {
      return payload;
    },
    pushStep(state, payload) {
      console.log(payload);
      return [...state, payload];
    },
  }
};