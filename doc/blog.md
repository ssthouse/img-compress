# 一个简单的 命令行 图片压缩工具

https://tinyjpg.com/ 是一个图片压缩网站, 在进行图片压缩的同时非常好的保存了图片的质量. 相信做前端的同学很多都用到过.

![image-20190601145559341](http://ww2.sinaimg.cn/large/006tNc79gy1g3lo1fwcdsj31u00gm1kx.jpg)

偶然一次发现该网站有提供`Developer API` , 点开一看还发现有很多已经封装好的第三方package. 

但这些package都是提供编程时使用的, 很多时候我们需要的是快速压缩一两张图片, 而不是编写脚本去执行代码.

所以为了方面命令行使用, 我将其封装成了一个 global 的npm包. 安装后即可全局使用. 

### 使用方式

1. 安装该命令行工具

   ```
   npm install -g @ssthouse/image-compresser
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



### 查看使用说明

不带参数的执行该工具就可以看到使用说明, 如有遇到问题可以在这里提issue:

