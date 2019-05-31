const fs = require("fs");
const request = require("request");

exports.compress = function(imgSrc) {
  // console.log(`compressing imgSrc`)
  // setTimeout(() => {
  //     console.log(`finish compress`)
  // }, 1000)

  const req = request.post(
    `https://api.tinify.com/shrink`,
    (err, resp, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log("URL" + body);
      }
    }
  );
  const form = req.form();
  form.append("user", `api:CV1X66xmtTbSTYpP3WXiHCXyhuz6yZ4C`);
  form.append("data-binary", fs.createReadStream(imgSrc));
  form.append(`dump-header`, `/dev/stdout`);
};
