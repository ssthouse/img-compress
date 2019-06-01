### Cli image compress tool powered with [Tinyjpg](https://tinyjpg.com/)

### How to use

1. First install this node cli tool with:
   (note: you need have node installed first, if not, please check: [node.js](https://nodejs.org/en/download/))

```shell
npm install -g @ssthouse/img-compress
```

2. To use this cli tool, you wil need a developer-key from tinyjpg.(free with 500 times per month)

please check this page to get your key: https://tinyjpg.com/developers

3. After that, fill in your api-key with:

```shell
img-compress init -key _your_personal_api_key_
```

4. That's it, you can start compress your images with one simple cmd:

```shell
img-compress ./test.png
```


### 使用方式

1. 安装该命令行工具

   ```
   npm install -g @ssthouse/img-compress
   ```

   

2. 设置 API key (注: API key 需要在 [tiniyjpg网站](https://tinyjpg.com/ ) 进行申请, 提供用户名和邮箱即可得到一个 **500次/ 每月** 的key)

   ```shell
   img-compress init -key your_api_key
   ```

   

3. 如果你的terminal网络需要使用代理的话, 需要进行设置:

   ```shell
   img-compress proxy http://example.com
   ```



4. 开始压缩图片

   ```shell
   img-process img_file
   ```

   命令执行成功后会在原图的同一目录看到压缩过的图片文件. 文件名以 `__compress.文件后缀` 结尾. 如: `test.png => test_compress.png` 

