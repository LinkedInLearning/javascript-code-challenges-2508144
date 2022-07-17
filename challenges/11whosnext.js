function whosnext(persons, now) {
  // Write your code here

}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {

    const persons = [
      { 'name': 'Thomas', 'birthday': '14 Jan' },
      { 'name': 'Tanja', 'birthday': '27 April' },
      { 'name': 'Marla', 'birthday': '12 June' },
      { 'name': 'Margarete', 'birthday': '25 August' },
      { 'name': 'Anne', 'birthday': '25 August' },
      { 'name': 'Laurin', 'birthday': '17 Nov' },
    ];

    assert.equal(whosnext(persons, '12 April'), 'Tanja');
    // assert.equal(whosnext(persons, '1 October'), 'Laurin');
    // assert.equal(whosnext(persons, '10 Dec'), 'Thomas');
    // assert.deepEqual(whosnext(persons, '1 August'), ['Anne', 'Margarete']);

  });
});
