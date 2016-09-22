/**
 * @Author: Created By McChen
 * @Date: 2016/7/7
 * @Mail: chenjiahao@jd.com
 * @Version: V1.0.0
 */

(function(){
    var fs = require('fs');
    var __base64 = {
        encode: function (filePath) {
            // read binary data
            var bitmap = fs.readFileSync(filePath);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');
        },
        decode: function (filePath, saveFilePath) {
            var base64str = this.encode(filePath);
            // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
            var bitmap = new Buffer(base64str, 'base64');
            // write buffer to file
            fs.writeFileSync(saveFilePath, bitmap);
            console.log('******** File created from base64 encoded string ********');
        }
    };
    var base64 = Object.create(__base64);
    module.exports = base64;
})();

