const { ethers, upgrades } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
  
    const mToken = await ethers.getContractFactory("MyToken");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(mToken, [owner.address,43], {
        initializer: "mint",
    });
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

main();
