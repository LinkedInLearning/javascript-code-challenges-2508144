function whosnext(persons, now) {
  // Write your code here

  const today = new Date(now);

  const personsNext = persons.map(
    person => {
      const birthdayObject = new Date(person.birthday);

      let diff = birthdayObject - today;
      if (diff < 0) {
        const birthdayNextYear = birthdayObject.setFullYear(birthdayObject.getFullYear() + 1)
        diff = birthdayNextYear - today;
      }
      return { 'name': person.name, diff };
    })
    .sort((a, b) => { return a.diff - b.diff })

  const next = personsNext.filter(person => person.diff === personsNext[0].diff)

  return (next.length === 1) ? next[0].name : next.map(person => person.name).sort()
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
    assert.equal(whosnext(persons, '1 October'), 'Laurin');
    assert.equal(whosnext(persons, '10 Dec'), 'Thomas');
    assert.deepEqual(whosnext(persons, '1 August'), ['Anne', 'Margarete']);

  });
});
