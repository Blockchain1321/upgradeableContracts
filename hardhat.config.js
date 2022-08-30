// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  networks:{
    rinkeby: {
      url:"https://rinkeby.infura.io/v3/f5e8965459f1491c9cc7f698a617290d",
      accounts:["64c139422c1e9ead4c976e43075bfd998536f54bb4820ead54f34343ff127aea",],
    },

    
  },
  etherscan:{
    apiKey:"R4BYANR5MYW6VZUYZ265I2NKT3GZID2CKT",
  }

};
