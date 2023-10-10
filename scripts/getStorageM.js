
const { ethers } = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

const sendShieldedQuery = async (provider, contractAddress, data) => {
  const rpcUrl = "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"; 
  const [encryptedData, usedEncryptedKey] = await encryptDataField(rpcUrl, data);
  const response = await provider.call({
    to: contractAddress,
    data: encryptedData,
  });
  return await decryptNodeResponse(rpcUrl, response, usedEncryptedKey);
};

async function main() {
  const contractAddress = "0xFBD508Bc97F6abaCb1B70EE01414E3771A7dE78E"; 
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("SimpleStorage"); 
  const contract = contractFactory.attach(contractAddress);
  const functionName = "getData";
  const responseMessage = await sendShieldedQuery(signer.provider, contractAddress, contract.interface.encodeFunctionData(functionName));
  const recordedResponse = contract.interface.decodeFunctionResult(functionName, responseMessage)[0];
  console.log("Recorded response:", recordedResponse);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});