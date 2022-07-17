const rps = (p1, p2) => {
  // Write your code here

  if (p1 === p2) return 0;

  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (rules[p1] === p2) {
    return 1;
  }
  else   {
    return 2;
  }
}

const { assert } = require('chai'); 
describe('Tests', () => {
  it("tests", () => {
    assert.equal(rps('rock', 'scissors'), 1);
    assert.equal(rps('scissors', 'paper'), 1);
    assert.equal(rps('paper', 'rock'), 1);

    assert.equal(rps('scissors', 'rock'), 2);
    assert.equal(rps('paper', 'scissors'), 2);
    assert.equal(rps('rock', 'paper'), 2);

    assert.equal(rps('rock', 'rock'), 0);
    assert.equal(rps('scissors', 'scissors'), 0);
    assert.equal(rps('paper', 'paper'), 0);
  });
});
