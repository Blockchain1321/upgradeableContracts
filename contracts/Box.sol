// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/*
proxy --> implementation
  ^
  |
  |
proxy admin
*/

contract Box {
    uint public val;
    uint public val2;

    // constructor(uint _val) {
    //     val = _val;
    // }

    function initialize(uint _val,uint _val2) external {
        val = _val;
        val2 = _val2;
    }
}
