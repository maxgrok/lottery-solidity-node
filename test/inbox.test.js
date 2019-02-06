const assert = require('assert'); // standard library, for making assertions about tests. 
const ganache = require('ganache-cli'); //requiring ganache
const Web3 = require('web3'); //uppercase Web3 notice this, is a constructor used to create instances of the web3 library , think of it as the class of Web3

const web3 = new Web3(ganache.provider()); //instance of Web3 and connect to local test network (ganache)


