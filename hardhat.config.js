require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL_YOUR_MUMBAI_RPC_URL , API_URL_YOUR_SWISSTRONIK_RPC_URL} = process.env;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    swisstron: {
      url: API_URL_YOUR_SWISSTRONIK_RPC_URL,
      accounts: [process.env.YOUR_SWISSTRONIK_RPC_URL], 
    },
    polygon_mumbai: {
      url: API_URL_YOUR_MUMBAI_RPC_URL,
      accounts: [process.env.YOUR_MUMBAI_RPC_URL], 
      
    }
  },
};