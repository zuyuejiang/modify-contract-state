//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
    uint public x;
    string public message;

    constructor(uint _x, string memory _message) {
        x = _x;
        message = _message;
    }

    function modifyToLeet() public {
        x = 1337;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
