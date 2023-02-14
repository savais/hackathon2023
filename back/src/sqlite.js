"use strict";
exports.__esModule = true;
var sqlite3_1 = require("sqlite3");
// Open a SQLite database, stored in the file db.sqlite
var db = new sqlite3_1.Database('db/database2.db');
// Fetch a random integer between -99 and +99
db.get('SELECT RANDOM() % 100 as result', function (_, res) { return console.log(res); });
