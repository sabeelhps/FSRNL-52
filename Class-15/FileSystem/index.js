const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'abc.txt');

async function main() {
    const fileContent = await fs.readFile(filePath, {encoding: 'utf-8'});
    console.log(fileContent);
}

main();



