const hre = require("hardhat");
const fs = require("fs/promises");
const { log } = require("console");

async function main() {

  const Token = await hre.ethers.getContractFactory('Token');
  const token = await Token.deploy("100");

  const DEX = await hre.ethers.getContractFactory('DEX');
  const dex = await DEX.deploy(token.address,100);
  // await token.deployed();
  // await writeDeploymentInfo(token);
  // await dex.deployed();
  // await writeDeploymentInfo(dex);

  await writeDeploymentInfo(token,"token.json");
  await writeDeploymentInfo(dex,"dex.json");

  async function writeDeploymentInfo(contract,filename="") {
    
    const data = {
      contract: {
        address: contract.address,
        signerAddress: contract.signer.address,
        abi: contract.interface.format(),
      },
    };
    console.log("DEBUG CONSOLE")
    console.log(data);
  
    const content = JSON.stringify(data, null, 2);
    await fs.writeFile(filename, content, { encoding: "utf-8" });
  }



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
