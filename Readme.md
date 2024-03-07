# Transfer Tokens README

## Overview
This repository contains a Solidity smart contract designed to facilitate token transfers across different blockchain networks using the Chainlink Cross-Chain Interoperability Protocol (CCIP). The contract allows for seamless token migration from Ethereum Sepolia to other supported blockchains, such as Polygon Mumbai, while enabling payment of CCIP fees in either LINK tokens or native gas tokens (e.g., ETH on Ethereum).

## Setup Locally
To set up and deploy the contract locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running the following commands:
    ```
    forge install smartcontractkit/ccip@ccip-develop
    forge install smartcontractkit/chainlink
    forge build
    ```
3. Deploy the contract to the ThirdWeb platform using the command:
    ```
    npx thirdweb deploy.
    ```


4. Provide the following addresses for transferring the tokens from Ethereum Sepolia to Polygon Mumbai testnet in the thirdweb interface while deploying:

   - Ethereum Sepolia router address: `0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59`
   - LINK contract address: `0x779877A7B0D9E8603169DdbD7836e478b4624789`

 5. After deploying, proceed to the frontend folder and follow these steps:

       1. Run `npm install` command.
       2. Run `yarn dev` command to launch the frontend.
       3. Connect your wallet.
       4. Input the receiver address and the amount of token to be transferred. Note: 1,000,000,000,000,000 wei is equivalent to 0.001 CCIP-BnM.
       5. After completion of the transaction from Metamask, check the opened link for confirmation.
       6.For configuration of Metamask, check the attached link in the frontend.


## Additional Information
This project is a simple token transfer implementation using CCIP. It is designed for educational purposes and intended as a learning exercise. Future iterations may include more advanced features.

## Demo Tutorial Video


https://github.com/ByteChic/Token_Transfer-22113098/assets/137928762/bee9c172-8167-4523-b8a2-f232be942484


