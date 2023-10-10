
const { ethers } = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

const sendShieldedQuery = async (provider, contractAddress, data) => {
  const rpcUrl = "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"; 
  const [encryptedData, usedEncryptedKey] = await encryptDataField(rpcUrl, data);
  const response = await provider.call({
    to: contractAddress,
    data: encryptedData,
  });
  return await decryptNodeResponse(rpcUrl, response, usedEncryptedKey);
};

async function main() {
  const contractAddress = "0x7e3E14389dE0ac6c0A14A27f98A96FafA4E381e3"; 
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