const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (file, content) => {
  fs.writeFile(file, content, 'utf8', (err) => {
    if (err) throw err;

    console.log('file successfully created!')
  });
};

module.exports.mkdir = (file_path) => {
  fs.mkdir(file_path, { recursive: true }, (err) => {
    if (err) throw err;

    console.log('directory successfully created!')
  });
};
