const db = require("../config/db");

exports.createUser = (email, password) =>
  new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });

exports.findByEmail = (email) =>
  new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, row) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });
