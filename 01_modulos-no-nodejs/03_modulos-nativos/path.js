const path = require('path');
const fs = require('fs');

// console.log(__filename);
// console.log(__dirname);

//pegar nome do arquivo
//console.log("Nome do arquivo: " + path.basename(__filename));
//pegar a extensão do arquivo
//console.log("Extensão do arquivo: " + path.extname(__filename));

//criar um arquivo no diretorio do arquivo atual 
fs.writeFile(path.join(__dirname, "mensagem.txt"), "welcome a peste", () =>{});