### Cli image compress tool powered with [Tinyjpg](https://tinyjpg.com/)

### How to use

1. First install this node cli tool with:
   (note: you need have node installed first, if not, please check: [node.js](https://nodejs.org/en/download/))

```shell
npm install -g image-compresser
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
