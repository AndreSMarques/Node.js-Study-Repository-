const fs = require('fs');
const path = require('path');
const { encode } = require('punycode');

// fs.mkdir(path.join(__dirname, 'newFolder'), (error)=>{
//   console.log(error);
// });

// fs.writeFile(path.join(__dirname, 'newFolder', "newfile.txt"), 'hey my bro: Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!', (error)=>{
//   console.log(error);  
// });

const logFile = async () => {
  try{
    const filePath = path.resolve('./newFolder/newfile.txt');
    const contents = await fs.promises.readFile(filePath, {encoding: 'utf8'});
    console.log(contents);
  }catch(error){
    console.log(error);
  }
};

logFile();