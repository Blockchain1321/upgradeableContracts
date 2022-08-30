//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyToken is Initializable, ERC20Upgradeable, OwnableUpgradeable{
    // /// @custom:oz-upgrades-unsafe-allow constructor
    // constructor() ERC20("MyToken", "MY") {
    // }

     function initialize() external initializer {
        __ERC20_init("MyToken", "MY");
        __Ownable_init();
    }

    function mint(address to, uint amount) external{
        _mint(to, amount);
    }
}