const fs = require('fs');

fs.writeFile('output.txt', 'Hello Rush.. How are you doing?', (err) => {
    if (err) throw err;
    else {console.log('File has been created successfully!');}
})