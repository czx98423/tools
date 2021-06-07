const fs = require('fs')
const compressing = require("compressing");


// let extract = unzip.Extract({ path: './' });
// fs.createReadStream('./table.serva.tab_bb6.zip').pipe(extract);
// extract.on('finish', function () {
//     console.log("解压完成!!");
// });

// extract.on('error', function (err) {
//     console.log(err);
// });

compressing.zip.uncompress('table.serva.tab_bb6.zip', './path').then(() => {}).catch(() => {});