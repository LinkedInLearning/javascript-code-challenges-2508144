function capitalize(string) {
  // Write your code here

}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(capitalize('Hallo welt.'), 'Hallo Welt.');
    assert.equal(capitalize('Guten tag, welt.'), 'Guten Tag, Welt.');
    assert.equal(capitalize('Das ist eine überschrift'), 'Das Ist Eine Überschrift');
    assert.equal(capitalize('JavaScript macht Spaß!'), 'JavaScript Macht Spaß!');
  });
});
