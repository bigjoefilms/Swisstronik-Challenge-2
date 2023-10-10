const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

const sendShieldedQuery = async (provider, destination, data) => {
  const rpclink = hre.network.config.url;
  const [encryptedData, usedEncryptedKey] = await encryptDataField(rpclink, data);
  const response = await provider.call({
    to: destination,
    data: encryptedData,
  });
  return await decryptNodeResponse(rpclink, response, usedEncryptedKey);
};

async function main() {
  const contractAddress = "0x9D1c4a7E27A73a68e1Be355B65EB57A1a2f35BB4";
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
