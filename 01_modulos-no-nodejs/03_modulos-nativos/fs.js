const fs = require('fs');
const path = require('path');

//criar uma pasta no diretorio
fs.mkdir(path.join(__dirname, 'newFolder'), (error)=>{
  console.log(error);
});

//criar um arquivo na nova pasta
fs.writeFile(path.join(__dirname, 'newFolder', "newfile.txt"), 'hey my bro', (error)=>{
  console.log(error);  
});

//adiconando conteudo ao arquivo existente
fs.appendFile(path.join(__dirname, 'newFolder', 'newfile.txt'), 'aaaaaaaaaaaa', ()=>{}); 

//ler arquivo/ guradar conteudo em variavel
let fileContent; 
fs.readFile(path.join(__dirname, 'newFolder', 'newfile.txt'), 'utf8', (error, data)=>{
  fileContent = data;
  console.log(error);
  console.log("Conteudo do arquivo ", fileContent);
});

