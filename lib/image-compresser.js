const KeyManager = require('./key-manager');
const keyManager = new KeyManager();
const chalk = require('chalk');

const compress = function (imgPath) {
  console.log(chalk.blue(`compressing......`));
  const apiKey = keyManager.getKey();
  const tinify = require("tinify");
  tinify.key = apiKey;
  tinify.proxy = "http://dev-proxy.oa.com:8080";
  const originFilePath = imgPath;
  let destFilePath = originFilePath.replace(".png", "_compressed.png");
  destFilePath = destFilePath.replace(".jpg", "_compressed.jpg");
  destFilePath = destFilePath.replace(".jpeg", "_compressed.jpeg");
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
