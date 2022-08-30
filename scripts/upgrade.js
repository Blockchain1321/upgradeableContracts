// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x5b8ee0717cd18F4fFd8552F2990cBaD757F5dC2b";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    const boxV2 =await upgrades.upgradeProxy(PROXY, BoxV2);
    await boxV2.deployed();
    console.log("Box upgraded",boxV2.address);
}


main();
