#!/usr/bin/env node

const colors = require("colors");
const imageCompresser = require("../lib/image-compresser");
const KeyManager = require("../lib/key-manager");
const keyManager = new KeyManager();

if (process.argv.length <= 2) {
  console.log(` 
  ### 使用方法 ###

  设置API key: img-process init -key ******
  注: 请前往 https://tinypng.com/developers 获取 API key

  压缩图片:     img-process imgFilePath
  注: 同一key 每月有500次使用限制, 压缩图片将生成在原图片同一目录中
  `);
  return;
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
      `使用压缩图片功能前, 请先配置api key: "img-compress init -key *******"`
    );
  }
  runCompress();
}

function runCompress() {
  console.log(`压缩ing......`);
  const apiKey = keyManager.getKey();
  const tinify = require("tinify");
  tinify.key = apiKey;
  const originFilePath = process.argv[2];
  let destFilePath = originFilePath.replace(".png", "_compressed.png");
  destFilePath = destFilePath.replace(".jpg", "_compressed.jpg");
  // console.log(`原图: ${originFilePath}    结果图: ${destFilePath}`);
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
