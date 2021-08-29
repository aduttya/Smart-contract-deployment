const Web3 = require('web3');
const Mycontract = require('./build/contracts/Mycontract.json');
// account address
const address = '0x0069F01FBa7f97B38D41c8694226100c370bC11f';
// private key accosiated with the account
const privateKey = "b06b9a369397fef3349d483ee86cf142497d9b1fc3fa85f4b28692792a14e928";

// Wallet Provider for signing the transactions
const HDWalletProvider = require('@truffle/hdwallet-provider')
const init = async ()=>{
// set the provider
    const provider = new HDWalletProvider(
        privateKey,
        'https://speedy-nodes-nyc.moralis.io/fb5b833fcec9ebea200cc8ae/bsc/testnet'
    );
    // creating web3 instance
    const web3 = new Web3(provider);
    //const id = await web3.eth.net.getId();
    //const deployedNetwork = Mycontract.networks[id];

    // creating contract instance
    let contract = new web3.eth.Contract(
        Mycontract.abi
    );

    //deploy the contract
    contract = await contract.deploy({
        data:Mycontract.bytecode
    }).send({from:address});

    // sending transaction with the function 
    await contract.methods.setValue(5).send({
        from:address
    }).then(function(results){
        console.log(results); // transaction receipt
    })

    // calling another function
    await contract.methods.getValue().call().then(function(results){
        console.log(results)
    })
}
init()