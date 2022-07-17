function isPassword(s) {
  // Write your code here
 
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isPassword('geheim'), false);
    assert.equal(isPassword('geheimespasswort'), false);
    assert.equal(isPassword('GeheimesPasswort'), false);
    assert.equal(isPassword('Geheim(23'), true);
    assert.equal(isPassword('Pa//w0rt'), true);
    assert.equal(isPassword('Pa33w@rt'), true);

  });
});
