const fs = require("fs");
const Configstore = require('configstore')
const packageJson = require('../packege.json')

const config = new Configstore(packageJson.name, {key: '', proxy: ''})

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
    return config.get('key')
  }

  setKey(apiKey) {
    config.set('key', apiKey)
  }

  getProxy() {
    return config.get('proxy')
  }

  setProxy(proxyStr) {
    config.set('proxy', proxyStr)
  }

}

module.exports = KeyManager;
