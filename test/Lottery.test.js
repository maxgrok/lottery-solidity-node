const assert = require('assert');
const ganache = require('ganache-cli');//automatically sets up test network in memory blockchain
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());//provider allows us to connect to any given network

const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
})

describe('Lottery Contract', ()=>{
    it('deploys a contract', () =>{
        assert.ok(lottery.options.address); // asserts that there is an address that exists
    });
})