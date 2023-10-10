const hre = require("hardhat");

async function main() {
    const contract = await hre.ethers.deployContract( "SimpleStorage", [1234567890]);

    await contract.waitForDeployment();

    console.log(
        `Deployed to ${contract.target}`
    );

    const Number = 0;
    const Value = await ethers.provider.getStorage(contract.target, Number);
    console.log(` "The state variable's store at" ${Number}: ${Value}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});