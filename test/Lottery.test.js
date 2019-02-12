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

    //what tests should we write? 
    //whenever you start writing tests, ask what behavior do you really care about when you look at this contract? 
    
    // make sure that anytime someone calls enter() that their address gets added to the players address
    it('allows one account to enter', async () =>{
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether') // use the utility from web3 amount in wei 
        });
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        })  // gets the players in the lottery contract, only element in the array should be the address as 0 index

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length); //value that it should be first, then value that it is
    });
    it('allows multiple accounts to enter', async () =>{
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether') // use the utility from web3 amount in wei 
        });
        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether') // use the utility from web3 amount in wei 
        });
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether') // use the utility from web3 amount in wei 
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        })  // gets the players in the lottery contract, only element in the array should be the address as 0 index

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length); //value that it should be first, then value that it is
    });
})