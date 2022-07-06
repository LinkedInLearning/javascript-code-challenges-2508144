const rps = (p1, p2) => {
  // Write your code here

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('rock paper scissors', function () {
  const getMsg = (n) => `Player ${n} won!`;

  it('player 1 win', function () {
    assert.equal(rps('rock', 'scissors'), getMsg(1));
    assert.equal(rps('scissors', 'paper'), getMsg(1));
    assert.equal(rps('paper', 'rock'), getMsg(1));
  });

  it('player 2 win', function () {
    assert.equal(rps('scissors', 'rock'), getMsg(2));
    assert.equal(rps('paper', 'scissors'), getMsg(2));
    assert.equal(rps('rock', 'paper'), getMsg(2));
  });

  it('draw', function () {
    assert.equal(rps('rock', 'rock'), 'Draw!');
    assert.equal(rps('scissors', 'scissors'), 'Draw!');
    assert.equal(rps('paper', 'paper'), 'Draw!');
  });
});
