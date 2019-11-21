const CryptoJS =require('crypto-js') ;
const crypto =require('crypto')

var salt='sdfarg8486rg';
var pwd = '123456';

var data={salt,pwd:crypto.pbkdf2Sync(pwd,salt,1024,128,'SHA1').toString('base64')}
console.log(data)

var mi=CryptoJS.AES.encrypt(pwd,'sb');
console.log(mi.toString());

var umi=CryptoJS.AES.decrypt(mi,'sb').toString(CryptoJS.enc.Utf8);
console.log(umi)