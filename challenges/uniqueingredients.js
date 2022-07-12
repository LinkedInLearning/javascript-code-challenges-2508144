function unique(ingredients) {
  // Write your code here

  return Array.from(new Set(ingredients.flat())).sort();
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.deepEqual(unique(
      [
        ['Zucker', 'Mehl'],
        ['Zucker', 'Mehl', 'Salat'],
        ['Salat', 'Zucker'],
      ]
    ), ['Mehl', 'Salat', 'Zucker']);

    assert.deepEqual(unique(
      [
        ['Bier', 'Chips'],
        ['Cola', 'Käse', 'Chips'],
        ['Bier', 'Cola'],
      ]
    ), ['Bier', 'Chips', 'Cola', 'Käse']);

    assert.deepEqual(unique(
      [
        ['Brot', 'Wurst'],
        ['Brot', 'Käse', 'Butter'],
        ['Wurst', 'Käse'],
      ]
    ), ['Brot', 'Butter', 'Käse', 'Wurst']);
  });
});
