const fs = require("fs");
const Configstore = require('configstore')
const packageJson = require('../package.json')

const config = new Configstore(packageJson.name, {key: '', proxy: ''})

class KeyManager {
  constructor() {
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
