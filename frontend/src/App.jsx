import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react"; // Importing contract hooks
import "./styles/Home.css";

export default function App() {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amountToTransfer, setAmountToTransfer] = useState("");
  const [transferCompleted, setTransferCompleted] = useState(false);

  const _destinationChainSelector = "12532609583862916517";
  const _token = "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05";

  const { contract } = useContract(
    "0x19A49981188b80EDDF4e10b74e8f186E2797CA8d"
  );
  const { mutateAsync: transferTokensPayLINK, isLoading } = useContractWrite(
    contract,
    "transferTokensPayLINK"
  );

  const handleTransfer = async () => {
    if (!receiverAddress || !amountToTransfer) {
      alert("Please enter both receiver address and amount to transfer.");
      return;
    }

    try {
      await transferTokensPayLINK({
        args: [
          _destinationChainSelector,
          receiverAddress,
          _token,
          amountToTransfer,
        ],
      });
      setTransferCompleted(true);
      // Open the link after the transaction is confirmed
      window.open(`https://ccip.chain.link/address/${receiverAddress}`);
    } catch (err) {
      console.error("Failed to transfer tokens:", err);
      alert("Failed to transfer tokens. Please try again.");
    }
  };

  const handleAddressChange = (event) => {
    setReceiverAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmountToTransfer(event.target.value);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="connect">
          <ConnectWallet />
        </div>
        <h1 className="title">Token Transfer</h1>
        <p className="description">
          Description: Migration of <b className="gradient-text">CCIP-BnM</b>{" "}
          from Ethereum Sepolia to Polygon Mumbai
        </p>
        <form className="form">
          <label htmlFor="receiverAddress" className="form-label">
            Enter the Wallet Address of Receiver:
          </label>
          <input
            id="receiverAddress"
            type="text"
            className="form-input"
            placeholder="Receiver Address"
            value={receiverAddress}
            onChange={handleAddressChange}
          />
          <label htmlFor="amountToTransfer" className="form-label">
            Amount of CCIP-BnM to be Transferred:
          </label>
          <input
            id="amountToTransfer"
            type="text"
            className="form-input"
            placeholder="Amount to Transfer"
            value={amountToTransfer}
            onChange={handleAmountChange}
          />
          <button
            type="button"
            onClick={handleTransfer}
            className="form-button"
          >
            Transfer
          </button>
        </form>
        {transferCompleted && (
          <p className="transfer-message">
            Transfer successful! Please check the link provided.
          </p>
        )}
      </div>
      <div className="footer">
        <p className="footer-title">Useful Links:</p>
        <p>
          <a
            href="https://docs.chain.link/ccip/test-tokens#mint-test-tokens"
            target="_blank"
            rel="noopener noreferrer"
          >
            1. Add CCIP-BnM to Your Wallet
          </a>
        </p>
        <p>
          <a
            href="https://faucets.chain.link/sepolia"
            target="_blank"
            rel="noopener noreferrer"
          >
            2. Get some Ethereum Sepolia Faucet
          </a>
        </p>
        <p>
          <a
            href="https://faucets.chain.link/sepolia"
            target="_blank"
            rel="noopener noreferrer"
          >
            3. Get Some LINK Tokens
          </a>
        </p>
      </div>
    </main>
  );
}
