function rover(way) {
  // Write your code here

  const position = { x: 0, y: 0 };
  let direction = 0;

  way.split('').forEach((step) => {
    switch (step) {
    case 'r':
      direction = (direction + 1) % 4;
      break;
    case 'l':
      direction = (direction - 1) % 4;
      break;
    default:
      switch(direction) {
      case 0:
        position.y++;
        break;
      case 1:
        position.x++;
        break;
      case 2:
        position.y--;
        break;
      case 3:
        position.x--;
        break;
      }
    }
  });

  return position;
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(rover('rffffr'), { x: 4, y: 0 });
    assert.deepEqual(rover('rfrfrfrfr'), { x: 0, y: 0 });
    assert.deepEqual(rover('ffrfrflflfrf'), { x: 3, y: 2 });
    assert.deepEqual(rover('rfffrfffrf'), { x: 2, y: -3 });
  });
});
