const fs = require("fs");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

fs.writeFileSync("secret-key.txt", secretKey, { flag: "wx" });
console.log(`Secret key written to "secret-key.txt".`);
