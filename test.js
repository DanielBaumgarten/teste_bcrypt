const bcrypt = require('bcrypt');
let texto = "Hello World";
textoHash = bcrypt.hashSync (texto, 10);
console.log(textoHash);
console.log(bcrypt.compareSync(texto, textoHash));
console.log(bcrypt.compareSync("Hello", textoHash));