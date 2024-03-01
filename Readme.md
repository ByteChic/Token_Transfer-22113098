# Transfer Tokens README

## Overview
This repository contains a Solidity smart contract designed to facilitate token transfers across different blockchain networks using the Chainlink Cross-Chain Interoperability Protocol (CCIP). The contract allows for seamless token migration from Ethereum Sepolia to other supported blockchains, such as Polygon Mumbai, while enabling payment of CCIP fees in either LINK tokens or native gas tokens (e.g., ETH on Ethereum).

## Prerequisites
Before utilizing this contract, ensure you have the following prerequisites:

- Proficiency in writing, compiling, deploying, and funding a Solidity smart contract.
- MetaMask wallet connected to the Ethereum Sepolia network with sufficient ETH and LINK tokens.
- Acquaintance with acquiring testnet LINK tokens.
- Familiarity with the supported networks and tokens for your intended transfer destination.
- Possession of CCIP test tokens, such as CCIP-BnM tokens.

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
4. Provide the following addresses:
   - Ethereum Sepolia router address: `0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59`
   - LINK contract address: `0x779877A7B0D9E8603169DdbD7836e478b4624789`
5. Once the contract is deployed successfully, proceed with funding it with CCIP-BnM tokens.

## Usage
1. Ensure your contract contains a sufficient balance of CCIP-BnM tokens.
2. Enable your contract to transfer tokens to the desired destination chain by invoking the `allowlistDestinationChain` function with the relevant chain selector.
3. Initiate token transfers:
    - For transferring tokens and paying in LINK:
        - Ensure your contract contains a sufficient balance of LINK tokens.
        - Invoke the `transferTokensPayLINK` function with the destination chain selector, receiver address, token address, and token amount.
    - For transferring tokens and paying in native gas:
        - Ensure your contract contains an adequate balance of native gas tokens (e.g., ETH).
        - Invoke the `transferTokensPayNative` function with the destination chain selector, receiver address, token address, and token amount.

## Additional Information
1. This contract utilizes Chainlink CCIP for seamless token transfers across different blockchain networks.
2. Tokens are transferred from the Ethereum Sepolia testnet to the Polygon Mumbai testnet.
3. CCIP fees for using the protocol are paid in LINK tokens. Ensure your contract is funded with LINK tokens to cover these fees.
4. Further information and updates regarding the project will be provided in due course. Currently, the focus is on the contract part, with frontend development in progress.

Follow the provided steps meticulously to ensure successful token transfers across blockchain networks using this contract.
