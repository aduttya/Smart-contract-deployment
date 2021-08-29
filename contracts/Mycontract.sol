// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Mycontract{

    uint x;

    function setValue(uint _x)external payable{
        x = _x;
    }

    function getValue()public view returns(uint){
        return x;
    }
}