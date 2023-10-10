
# Swisstronik Developer Challenge 2

This project showcases the process of creating and deploying a smart contract containing a solitary private state variable on both the Mumbai testnet and the Swisstronik testnet. Furthermore, it includes a script for accessing this state variable using the RPC method eth_getStorageAt() on both of these networks.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for testing and deployment purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Access the variable using the RPC method eth_getStorageAt() on both networks

npx hardhat run scripts/accessStorage.js

1. Clone this repository to your local machine:

### Deployed Contract Addresses

Smart Contract Address on Swisstronik testnet:
- ["0x7e3E14389dE0ac6c0A14A27f98A96FafA4E381e3"](#contract-address) 

Smart Contract Address on Mumbai testnet: 
- ["0x7e3E14389dE0ac6c0A14A27f98A96FafA4E381e3"](#contract-address) 

```bash
git clone https://github.com/your-username/swisstronik-dev-challenge-2.git
cd swisstronik-dev-challenge-2
Install the project dependencies:
bash
Copy code
npm install
Running the Tests
To run the tests for the smart contract, execute the following command:

bash
Copy code
npx hardhat test
Accessing the Smart Contract Variable
You can access the private state variable of the deployed smart contract on both the Mumbai testnet and Swisstronik testnet using the provided script. Follow these steps:

Deploy the smart contract to the desired network (Mumbai or Swisstronik) using Hardhat.

Run the script to access the variable:

bash
Copy code
npx hardhat run scripts/accessStorage.js --network mumbai
or

bash
Copy code
npx hardhat run scripts/accessStorage.js --network swisstronik
The script will display the value of the state variable using the eth_getStorageAt() RPC method.
Deployed Contract Addresses
Smart Contract Address on Swisstronik testnet: Link

Smart Contract Address on Mumbai testnet: Link

