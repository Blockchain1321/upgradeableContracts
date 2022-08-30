// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract BoxV2 {
    uint public val;
    uint public val2;


    // function initialize(uint _val) external {
    //     val = _val;
    // }

    function inc() external {
        val += 1;
    }

    function b() external view returns(uint){
        return val;
    }

}