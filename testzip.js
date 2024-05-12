const decompress = require('decompress');
console.log('Decompressing files...');
decompress(`${__dirname}/zipfiles/HC300.zip`, `${__dirname}/projects`)
    .then(files => {
        console.log('Files decompressed successfully');
    })
    .catch(err => {
        console.error('An error occurred:', err);
    });
