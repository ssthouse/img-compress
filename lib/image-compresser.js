const KeyManager = require('./key-manager');
const keyManager = new KeyManager();
const chalk = require('chalk');

const compress = function (imgPath) {
  console.log(chalk.blue(`Compressing......`));
  const apiKey = keyManager.getKey();
  const tinify = require("tinify");
  tinify.key = apiKey;
  const proxyConfig = keyManager.getProxy();
  if (proxyConfig) {
    tinify.proxy = proxyConfig;
  }
  const originFilePath = imgPath;
  const fileTypeRegrex = new RegExp(/.(jpg|jpeg|png)$/, 'g');
  let destFilePath = originFilePath.replace(fileTypeRegrex, "_compressed.$1");
  // console.log(`原图: ${originFilePath}    结果图: ${destFilePath}`);
  tinify
    .fromFile(originFilePath)
    .toFile(destFilePath)
    .then(() => {
      console.log(chalk.green(`Compress success`));
    })
    .catch(e => {
      console.log(chalk.red(`Compress Fail: ${e.message}`));
      console.log(e);
    });
};


module.exports = compress;
