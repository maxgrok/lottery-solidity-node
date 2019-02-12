const assert = require('assert');
const ganache = require('ganache-cli');//automatically sets up test network in memory blockchain
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());//provider allows us to connect to any given network

const { interface, bytecode } = require('../compile');

