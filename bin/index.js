#!/usr/bin/env node

const colors = require("colors");
const imageCompresser = require("../lib/image-compresser");
const KeyManager = require("../lib/key-manager");
const keyManager = new KeyManager();

function isInitCmd() {
  for (let arg of process.argv) {
    if (arg.indexOf("init") !== 0) return true;
  }
  return false;
}

function getApiKeyFromArgv() {
  const keyArgIndex =
    process.argv.findIndex(arg => {
      return arg === "-key";
    }) + 1;
  if (keyArgIndex >= process.argv.length) {
    console.log(
      `please enter api-key, for example: "img-compress init -key *******"`
    );
    return "";
  }
  return process.argv[keyArgIndex];
}

if (isInitCmd()) {
  const apiKeyFromArg = getApiKeyFromArgv();
  if (!apiKeyFromArg) return;

  keyManager.setKey(apiKeyFromArg);
} else {
  if (!keyManager.getKey()) {
    console.log(
      `before use it, please config the api-ke, for example: "img-compress init -key *******"`
    );
  }
  const apiKey = keyManager.getKey();
  const tinify = require("tinify");
  tinify.key = apiKey;
  const filePath = process.argv[1];
  const destPath = "test.png";
  tinify.fromFile(filePath).toFile(destPath);
}

imageCompresser.compress("./test.png");
