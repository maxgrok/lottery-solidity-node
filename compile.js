const path = require('path'); // using the path module get cross platform compatibility
//generates a valid path

const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts', 'Inbox.sol'); // dirname is current working directory
// generates path that goes directly to the path appropriate for the Inbox.sol contract

const source = fs.readFileSync(inboxPath, 'utf8');//reading source code of the file

module.exports = solc.compile(source, 1).contracts[':Inbox']; //compiles the Inbox contract 
// module.exports makes it available to other files



