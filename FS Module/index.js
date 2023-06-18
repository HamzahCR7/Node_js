const fsModule = require("fs");

// fsModule.writeFileSync('text.txt','hello world! I am created using Node js File System');//to create a file
// console.log(fsModule.readFileSync('text.txt').toString());//read the file
// fsModule.renameSync('text.txt','helloWorld.js')//rename the existing file
// fsModule.renameSync('helloWorld.js','helloWorld.txt')//rename the existing file
// fsModule.truncateSync('helloWorld.txt')//to remove the content of file
// fsModule.writeFileSync('helloWorld.txt','hello world')
// fsModule.unlink('helloWorld.txt', (err) => {
//     if (err) {
//       console.error('Error deleting the file:', err);       //delete the entire file
//       return;
//     }

//     console.log('File deleted successfully.')})

// fsModule.readdir('../../',(err,files)=>{
//     if(err) {
//         console.error('Error')            to read directory
//         return;
//     }
//     console.log(files)
// })

// fsModule.appendFileSync('text.txt',' New Content appendin')
const bookInfo=[
    {
        author:"Charles Dickens",
        book:'abc1'
    },
    {
        author:"Chetan Bhagat",
        book:'half girlfriend'
    },
    {
        author:"Paulo Coelho",
        book:'Alchemist'
    }
]
let bookInfoStringfy=[];
bookInfoStringfy=JSON.stringify(bookInfo);
let bookParsed=JSON.parse(bookInfoStringfy)
// console.log(typeof(bookParsed))
bookParsed.forEach((info)=>{
// console.log(info.author)
})

// fsModule.writeFileSync('BookInfo.json',bookInfoStringfy)
// fsModule.appendFileSync('BookInfo.json',JSON.stringify(bookInfo))

// fsModule.copyFileSync('text.txt','text1.txt'); //to copy file
// fsModule.stat('BookInfo.json',(err,size)=>{
//     if(err){
//         console.error(eror)
//         return
//     }
//     console.log(size.size)
// })
const fs = require('fs');
const path = require('path');

function searchFiles(directoryPath, fileExtension) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      console.log(filePath)

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error checking the file:', err);
          return;
        }

        if (stats.isFile() && path.extname(filePath) === fileExtension) {
            console.log('extname ',path.extname(filePath))
        //   console.log(filePath);
        } else if (stats.isDirectory()) {
          searchFiles(filePath, fileExtension); // Recursively search subdirectories
        }
      });
    });
  });
}

// Usage example: Search for all JavaScript files in the "myDirectory" directory
const directoryPath = './';
const fileExtension = '.json';

searchFiles(directoryPath, fileExtension);
