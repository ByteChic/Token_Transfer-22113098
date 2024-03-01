import React, { useState } from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function App() {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amountToTransfer, setAmountToTransfer] = useState('');
  const [transferCompleted, setTransferCompleted] = useState(false);

  const handleTransfer = () => {
    // Check if receiverAddress is empty
    if (!receiverAddress) {
      alert('Please enter the wallet address of the receiver.');
      return;
    }

    // Reset the receiverAddress and amountToTransfer to empty strings
    setReceiverAddress('');
    setAmountToTransfer('');

    setTimeout(() => {
      setTransferCompleted(true);
      window.open('https://ccip.chain.link/address/0x19a49981188b80eddf4e10b74e8f186e2797ca8d');
      alert('Please check the status of the transfer in the CCIP explorer and open the link in another window.');
    }, 1);
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
        <p className="description">Description: Migration of <b className="gradient-text-0">CCIP-BnM</b> from Ethereum Sepolia to Polygon Mumbai</p>
        <form className="form">
          <label htmlFor="receiverAddress" className="form-label">Enter the Wallet Address of Receiver:</label>
          <input 
            id="receiverAddress" 
            type="text" 
            className="form-input" 
            value={receiverAddress} 
            onChange={handleAddressChange} 
          />
          <label htmlFor="amountToTransfer" className="form-label">Amount of CCIP-BnM to be Transferred:</label>
          <input 
            id="amountToTransfer" 
            type="text" 
            className="form-input" 
            value={amountToTransfer} 
            onChange={handleAmountChange} 
          />
          <button type="button" onClick={handleTransfer} className="form-button">Transfer</button>
        </form>
        {transferCompleted && <p className="transfer-message">Please check the status of the transfer in the CCIP explorer and open the link in another window.</p>}
      </div>
      <div className="footer">
        <p className="footer-title">Useful Links:</p>
        <p><a href="https://docs.chain.link/ccip/test-tokens#mint-test-tokens" target="_blank" rel="noopener noreferrer">1. Add CCIP-BnM to Your Wallet</a></p>
        <p><a href="https://faucets.chain.link/sepolia" target="_blank" rel="noopener noreferrer">2. Get some Ethereum Sepolia Faucet</a></p>
        <p><a href="https://faucets.chain.link/sepolia" target="_blank" rel="noopener noreferrer">3. Get Some LINK Tokens</a></p>
      </div>
    </main>
  );
}
