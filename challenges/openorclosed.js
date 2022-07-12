function isOpen(timestamp) {
  // Write your code here

  const openingHours = {
    0: [],
    1: [8, 12, 14, 18],
    2: [8, 12, 14, 18],
    3: [8, 12],
    4: [8, 12, 14, 20],
    5: [8, 12, 14, 18],
    6: [8, 13],
  };

  const date = new Date(timestamp);

  // const isSometimeOpen = openingHours[date.getDay()].map((value,index) => {
  //   console.log(index, value);
  //   return (index % 2 === 0) ? (date.getHours() >= value) : (date.getHours() < value);
  // });

  for (let i = 0; i < openingHours[date.getDay()].length; i += 2) {
    if (
      date.getHours() >= openingHours[date.getDay()][i] &&
      date.getHours() < openingHours[date.getDay()][i + 1]
    ) {
      return true;
    }
  }

  return false;
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isOpen('2026-7-14 09:00'), true);
    assert.equal(isOpen('2026-7-14 16:00'), true);
    assert.equal(isOpen('2026-7-15 10:00'), true);
    assert.equal(isOpen('2026-7-15 16:00'), false);
    assert.equal(isOpen('2026-7-18 14:00'), false);
    assert.equal(isOpen('2026-7-19 09:00'), false);

  });
});
