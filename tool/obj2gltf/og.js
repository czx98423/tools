const obj2gltf = require('obj2gltf');
const fs = require('fs');
obj2gltf('./obj/che/ff.obj')
    .then(function(gltf) {
      console.log(gltf)
        const data = Buffer.from(JSON.stringify(gltf));
        fs.writeFileSync('./obj/che/ff.gltf', data);
});