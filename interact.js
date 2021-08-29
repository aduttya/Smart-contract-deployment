const Web3 = require('web3');
const Mycontract = require('./build/contracts/Mycontract.json');
const address = '0x0069F01FBa7f97B38D41c8694226100c370bC11f';
const privateKey = "b06b9a369397fef3349d483ee86cf142497d9b1fc3fa85f4b28692792a14e928";


const HDWalletProvider = require('@truffle/hdwallet-provider')
const init = async ()=>{

    const provider = new HDWalletProvider(
        privateKey,
        'https://speedy-nodes-nyc.moralis.io/fb5b833fcec9ebea200cc8ae/bsc/testnet'
    );
    const web3 = new Web3(provider);
    //const id = await web3.eth.net.getId();
    //const deployedNetwork = Mycontract.networks[id];
    let contract = new web3.eth.Contract(
        Mycontract.abi
    );

    contract = await contract.deploy({
        data:Mycontract.bytecode
    }).send({from:address});

    await contract.methods.setValue(5).send({
        from:address
    }).then(function(results){
        console.log(results);
    })


    await contract.methods.getValue().call().then(function(results){
        console.log(results)
    })
}
init()