const chalk = require('chalk');

function printDoc() {
  console.log(chalk.green(` 
  ### 使用方法 ###

  设置API key:  ${chalk.blue("img-process init -key ******")}
  注: 请前往 https://tinypng.com/developers 获取 API key

  压缩图片:     ${chalk.blue("img-process imgFilePath")}
  注: 同一key 每月有500次使用限制, 压缩图片将生成在原图片同一目录中
  
  设置代理:     ${chalk.blue("img-process proxy http://example.com")}



  ### How to use ###

  Before compressing image, you need to innit this tool with api-key: ${chalk.blue("img-compress init -key ******")}
  note: you can get free api-key with: https://tinypng.com/developers

  After init the key, you can start compress image with:  ${chalk.blue("img-process imgFilePath")}
  note: the free key can compress 500 times per month
  
  Set proxy:   ${chalk.blue("img-process proxy http://example.com")}
  `));
}

function printInitKeyHint() {
  console.log(
    chalk.yellow(`使用压缩图片功能前, 请先配置api key: ${chalk.blue("img-compress init -key *******")}
       Before compressing image, please set api key: ${chalk.blue("img-compress init -key *******")}`)
  );
}

function printSetProxyHint() {
  console.log(
    chalk.yellow(`
    设置代理:     ${chalk.blue("img-process proxy http://example.com")}
       Set proxy:   ${chalk.blue("img-process proxy http://example.com")}`));
}

module.exports = {
  printDoc,
  printInitKeyHint,
  printSetProxyHint
};
