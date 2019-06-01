#!/usr/bin/env node
const imageCompresser = require("../lib/image-compresser");
const KeyManager = require("../lib/key-manager");
const keyManager = new KeyManager();
const consoleUtil = require('../lib/console-util');


function isEmptyArg() {
  return process.argv.length <= 2;
}

if (isEmptyArg()) {
  consoleUtil.printDoc();
  return;
}

if (isInitCmd()) {
  const apiKeyFromArg = getApiKeyFromArgv();
  if (!apiKeyFromArg) return;
  keyManager.setKey(apiKeyFromArg);
} else {
  if (!keyManager.getKey()) {
    consoleUtil.printInitKeyHint();
  }
  const imgPath = process.argv[2];
  imageCompresser(imgPath);
}


function isInitCmd() {
  for (let arg of process.argv) {
    if (arg.indexOf("init") !== -1) {
      console.log(arg);
      return true;
    }
  }
  return false;
}

function getApiKeyFromArgv() {
  const keyArgIndex =
    process.argv.findIndex(arg => {
      return arg === "-key";
    }) + 1;
  if (keyArgIndex >= process.argv.length) {
    consoleUtil.printInitKeyHint();
    return "";
  }
  return process.argv[keyArgIndex];
}
