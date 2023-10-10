require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [process.env.YOUR_SWISSTRONIK_RPC_URL], 
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/your-api-key",
      accounts: [process.env.YOUR_MUMBAI_RPC_URL], 
      gas: 2100000,
        gasPrice: 8000000000,
        saveDeployments: true,
    }
  },
};