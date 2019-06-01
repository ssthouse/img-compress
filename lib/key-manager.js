const fs = require("fs");
const keyFilePath = `./apiKey.txt`;
const proxyFilePath = `./proxy.txt`;

class KeyManager {
  constructor() {
    if (!fs.existsSync(keyFilePath)) {
      fs.writeFileSync(keyFilePath, "");
    }
    if (!fs.existsSync(proxyFilePath)) {
      fs.writeFileSync(proxyFilePath, "");
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
    fs.writeFileSync(keyFilePath, apiKey);
  }

  getProxy() {
    return fs.readFileSync(proxyFilePath).toString();
  }

  setProxy(proxyStr) {
    fs.writeFileSync(proxyFilePath, proxyStr);
  }

}

module.exports = KeyManager;
