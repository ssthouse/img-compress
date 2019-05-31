const fs = require("fs");
const keyFilePath = `./apiKey.txt`;

class KeyManager {
  constructor() {
    if (!fs.existsSync(keyFilePath)) {
      fs.writeFileSync(keyFilePath, "");
    }
    const apiKey = fs.readFileSync(keyFilePath);
    if (apiKey) {
      this.apiKey = apiKey;
      this.isRegistered = true;
    } else {
      this.isRegistered = false;
    }
  }

  getKey() {
    return fs.readFileSync(keyFilePath).toString();
  }

  setKey(apiKey) {
    fs.writeFileSync("./apiKey.txt", apiKey);
  }
}

module.exports = KeyManager;
