function rover(way) {
  // Write your code here

  const pos = { x: 0, y: 0, dir: 0 };
  const directions = { 'r': 1, 'l': -1};
  const forwards = { 
    0: {x: 0, y: 1}, 
    1: { x: 1, y: 0 }, 
    2: { x: 0, y: -1 }, 
    3: { x: -1, y: 0 } 
  }

  way.split('').forEach((step) => {

    if( step == 'f') {
      pos.x += forwards[pos.dir].x;
      pos.y += forwards[pos.dir].y;
      return;
    }
    
    pos.dir = (pos.dir + directions[step]) % 4;

  });

  delete pos.dir;
  return pos;
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
