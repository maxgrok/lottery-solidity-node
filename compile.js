const path = require('path'); // using the path module get cross platform compatibility
//generates a valid path

const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname,'contracts', 'Lottery.sol'); // dirname is current working directory
// generates path that goes directly to the path appropriate for the Inbox.sol contract

const source = fs.readFileSync(lotteryPath, 'utf8');//reading source code of the file

module.exports = solc.compile(source, 1).contracts[':Lottery']; //compiles the Inbox contract 
// module.exports makes it available to other files



