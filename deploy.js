const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider('upset move admit check carbon favorite future easy ring kangaroo churn tuna','https://rinkeby.infura.io/v3/f38dd2fe6a7a4abeadeb84b15f69d458' );
// first argument is the account mnemonic, second argument need the rinkeby test network endpoint address 

const web3 = new Web3(provider); //instance of web3, completely enabled for the Rinkeby network. 

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    
    console.log('attempting to deploy from account', accounts[0]);

   const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('contract deployed to ', result.options.address);
    console.log(interface);
}
deploy();