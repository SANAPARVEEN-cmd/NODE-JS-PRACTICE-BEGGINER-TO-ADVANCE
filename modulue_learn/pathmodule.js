const path = require('path');
console.log(path.sep);

const filePath = path.join('basics learning' , 'module_learn' , 'pathmodule.js');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname , 'basics learning' , 'module_learn' , 'pathmodule.js');
console.log(absolute);