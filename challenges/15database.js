function isValid(coupon) {
  // Write your code here

  return new Promise((resolve, reject) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database("challenges/database.db");
    const sql = "SELECT * FROM coupons WHERE coupon = ? AND valid = 1";

    db.all(sql, coupon, function (error, rows) {
      db.close();
      if (error) {
        reject(error);
      }

      resolve((rows.length === 1));
    });
  });
}

const { expect } = require('chai');
describe("Tests", async () => {
  it("tests", async () => {
    expect(await isValid('692784')).to.equal(true);
    expect(await isValid('567237')).to.equal(true);
    expect(await isValid('454896')).to.equal(false);
    expect(await isValid('111')).to.equal(false);
  });
});
