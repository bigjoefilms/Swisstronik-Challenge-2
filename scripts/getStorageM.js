const ethers = require('ethers');

const MUMBAI_NODE_URL = "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";

const getMumbaiStorage = async (address, slot, block) => {
  const provider = new ethers.JsonRpcProvider(MUMBAI_NODE_URL);
  try {
    const storage = await provider.send("eth_getStorageAt", [address, slot, block]);

    if (storage !== undefined && ethers.utils.isHexString(storage)) {
      console.log("Storage:", storage);
      const value = BigInt(storage).toString();
      console.log("Value:", value);
    } else {
      console.error("Invalid storage value or slot does not exist.");
    }
  } catch (error) {
    console.error("Error fetching Mumbai storage:", error);
  }
};



getMumbaiStorage("0xFBD508Bc97F6abaCb1B70EE01414E3771A7dE78E", "0", "latest");