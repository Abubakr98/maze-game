class Random {
  from = 0;
  to = 3;

  constructor(from = this.from, to = this.to) {
    this.from = from;
    this.to = to;
  }

  getRandomNum(from = this.from, to = this.to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }

  getRandomStep(steps) {
    return steps[this.getRandomNum(0, steps.length - 1)];
  }
}

class Game {
  field = [];
  size = 3;
  steps = ['up', 'down', 'left', 'right'];
  path = [];
  pathSteps = [];
  step = 1;
  prevStep = null;
  start = true;
  random = new Random();

  constructor(size = this.size) {
    this.size = size;
  }

  getStartPosition() {
    return {
      i: this.random.getRandomNum(0, this.field.length - 1),
      j: this.random.getRandomNum(0, this.field.length - 1),
    };
  }

  setStartPosition() {
    if (!this.start) return false;
    const pos = this.getStartPosition();
    this.field[pos.i][pos.j] = this.step;
    this.step += 1;
    this.prevStep = pos;
    this.path.push(pos);
    this.start = false;
    return true;
  }

  getNextStep() {
    const ps = this.prevStep;
    for (let i = 0; i < this.size ** 2; i++) {
      let step = this.random.getRandomStep(this.steps);
      if (!this.path.includes(this.path[this.path.length - 1])) {
        step = this.random.getRandomStep(this.steps);
      } else if (step === this.path[this.path.length - 1]) { //сокращает шанс выпадания нескольких шагов подряд
        step = this.random.getRandomStep(this.steps);
      }
      switch (step) {
        case 'up':
          if (ps.i - 1 >= 0) {
            this.pathSteps.push(step);
            return {i: ps.i - 1, j: ps.j};
          }
          break;
        case 'down':
          if (ps.i + 1 <= this.field.length - 1) {
            this.pathSteps.push(step);
            return {i: ps.i + 1, j: ps.j};
          }
          break;
        case 'left':
          if (ps.j - 1 >= 0) {
            this.pathSteps.push(step);
            return {i: ps.i, j: ps.j - 1};
          }
          break;
        case 'right':
          if (ps.j + 1 <= this.field.length - 1) {
            this.pathSteps.push(step);
            return {i: ps.i, j: ps.j + 1};
          }
          break;
        default:
          break;
      }
    }
    return false;
  }

  setNextStep() {
    const nextPos = this.getNextStep();
    this.path.push(nextPos);
    this.step += 1;
    this.prevStep = nextPos;
  }

  createGameField(size = this.size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr[i] = [];
      for (let j = 0; j < size; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  }

  startGame(countOfSteps = 10) {
    this.field = this.createGameField();
    this.setStartPosition();
    for (let i = 0; i < countOfSteps; i++) {
      this.setNextStep();
    }
  }

  getPath() {
    return this.path;
  }

  getPathSteps() {
    return this.pathSteps;
  }

  getField() {
    return this.field;
  }

  getFinishPos() {
    return this.prevStep;
  }

  getFinishedField() {
    const finishedField = this.field.map(function (arr) {
      return arr.slice();
    });
    finishedField[this.prevStep.i][this.prevStep.j] = 2;
    return finishedField;
  }
}

export default Game