pragma solidity ^0.8.9;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// D:\Code\Eth-Remix\erc20-token\node_modules\
contract Token is ERC20{
    constructor(uint initialSupply) ERC20("SidCoin","SID"){
        _mint(msg.sender, initialSupply);
    }
}