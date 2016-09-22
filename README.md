# jm-copy-base64
通过base64自动复制文件的实用node模块

## 安装

``` bash
    npm install jm-copy-base64
```

## 方法

###     encode(filePath)

将filePath路径的文件转为base64格式的Buffer，返回该Buffer。
注意：这里用的是同步读取，若该path指向不为文件，将会自动抛出错误

###     decode(filePath, saveFilePath)

将filePath路径的文件转为base64格式的Buffer，将该Buffer进行decode处理，生成新文件到saveFilePath下。

## 用法

请在node项目中使用，因为它依赖node.js的fs模块。

``` Javascript
    // import copyBase64 from 'jm-copy-base64'; // ES6
    var copyBase64 = require('jm-copy-base64');
    copyBase64.asyc("root/parent/child")
```

## License

MIT
