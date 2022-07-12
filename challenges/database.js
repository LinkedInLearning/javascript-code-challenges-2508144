var sqlite3 = require('sqlite3').verbose();
var file = "databse.db";
var db = new sqlite3.Database(file);
// db.all("CREATE TABLE coupons (coupon TEXT PRIMARY KEY); ", function (err, rows) {
//   console.log("done")
// });

// db.all("INSERT INTO coupons ('coupon') VALUES ('randomstring') ", function (err, rows) {
//   console.log("done")
// });

db.all("SELECT coupon FROM coupons", function (err, rows) {
  rows.forEach(function (row) {
    console.log(row.coupon);
  })
});
db.close();