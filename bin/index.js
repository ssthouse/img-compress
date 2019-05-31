#!/usr/bin/env node

const colors = require("colors");
const imageCompresser = require("../lib/image-compresser");
const KeyManager = require("../lib/key-manager");
const keyManager = new KeyManager();

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
    console.log(
      `please enter api-key, for example: "img-compress init -key *******"`
    );
    return "";
  }
  return process.argv[keyArgIndex];
}

console.log(`running~~~~`);

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
  console.log(`压缩ing......`);
  const apiKey = keyManager.getKey();
  const tinify = require("tinify");
  tinify.key = apiKey;
  const originFilePath = process.argv[2];
  let destFilePath = originFilePath.replace(".png", "_compressed.png");
  destFilePath = destFilePath.replace(".jpg", "_compressed.jpg");
  console.log(`原图: ${originFilePath}    结果图: ${destFilePath}`);
  tinify
    .fromFile(originFilePath)
    .toFile(destFilePath)
    .then(() => {
      console.log(`图片压缩成功`);
    })
    .catch(e => {
      console.log(`图片压缩失败: ${e.message}`);
      console.log(e);
    });
}
