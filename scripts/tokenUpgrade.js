// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x6bA8DA32ad4918d6386C04116B354d07d645E0d5";

async function main() {
    const BoxV2 = await ethers.getContractFactory("MyTokenUpgradeable");
    console.log("Upgrading Box...");
    const boxV2 =await upgrades.upgradeProxy(PROXY, BoxV2);
    await boxV2.deployed();
    console.log("Box upgraded",boxV2.address);
}


main();