const Mycontract = artifacts.require('Mycontract');

module.exports = async function(deployer,_,accounts){
    await deployer.deploy(Mycontract)
    await web3.eth.sendTransaction({
        from : accounts[0],
        to : '0x63d9a735385797f9f5301507534586cf85bfe127',
        value : web3.utils.toWei('10','ether')

    });
}