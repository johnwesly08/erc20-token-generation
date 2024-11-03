# 🚀 ERC20 Token Creation & Deployment Project

This project walks you through creating, deploying, and testing your own ERC20 token using Solidity, Hardhat, and JavaScript. With this guide, you can deploy your token on the Sepolia test network (or any Ethereum-compatible chain) and interact with it like a pro! 🌐

---

## 📋 Project Overview

This project provides everything you need:
- **ERC20 Token Contract**: Implement essential ERC20 functionalities.
- **Testing Suite**: Verify contract reliability and behavior.
- **Deployment Script**: Automate deployment on Ethereum test networks.

---

## ⚙️ Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16+)
- [NPM](https://www.npmjs.com/) (v7+)
- [Hardhat](https://hardhat.org/)

---

## 🚀 Getting Started

Follow these steps to set up, customize, and deploy your ERC20 token.

### Step 1: Clone the Repository

Clone the project to your local environment:

```bash
git clone <repository_url>
cd <project_directory>
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

### Step 3: Configure Environment Variables

Set up your `.env` file with the following details for your wallet and network configuration:

```plaintext
SEPOLIA_RPC_URL=<YOUR_SEPOLIA_RPC_URL>
PRIVATE_KEY=<YOUR_WALLET_PRIVATE_KEY>
```

---

## 📂 Project Structure

Here’s a breakdown of the key files:

- **contracts/Token.sol**: The ERC20 token contract that defines all token properties and functionality.
- **scripts/deploy.js**: Deployment script to deploy the token to a chosen network.
- **test/Token.js**: Test cases to verify token functionality and contract interactions.

---

## 🔑 Key Features of the ERC20 Token Contract

The `Token.sol` contract follows the ERC20 standard and includes:

- **Token Properties**: `name`, `symbol`, `decimals`, `totalSupply`.
- **Core Functionalities**:
  - `balanceOf`: Check token balance for any address.
  - `transfer`: Transfer tokens to another address.
  - `approve` and `allowance`: Approve and manage allowances for token spending.
  - `transferFrom`: Transfer tokens on behalf of an owner.

---

## 🚀 Deployment Guide

To deploy your token on Sepolia or another network:

### Step 1: Compile the Contract

Compile the contract using Hardhat:

```bash
npx hardhat compile
```

### Step 2: Deploy the Contract

Run the deployment script to deploy the token:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

After deployment, the script will provide the contract address, allowing you to interact with your token!

---

## 🧪 Testing the Token Contract

To verify that the token contract works as expected, run the test suite:

```bash
npx hardhat test
```

The test cases in `test/Token.js` will ensure all core functionalities are working.

---

## 💡 Example Commands

Once deployed, you can interact with your token programmatically. Here are a few example commands:

### Check Token Balance

Retrieve the token balance of a specific address:

```javascript
const balance = await token.balanceOf("<wallet_address>");
console.log("Balance:", balance.toString());
```

### Transfer Tokens

Transfer tokens to another address:

```javascript
await token.transfer("<recipient_address>", <amount>);
console.log("Tokens transferred!");
```

### Approve and Transfer Tokens on Behalf

Authorize an address to spend tokens on your behalf and execute the transfer:

```javascript
await token.approve("<spender_address>", <amount>);
await token.transferFrom("<owner_address>", "<recipient_address>", <amount>);
console.log("Tokens transferred on behalf of owner!");
```

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 📚 Additional Resources

- **ERC20 Standard**: Learn about the ERC20 standard [here](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/).
- **Hardhat Documentation**: Explore Hardhat’s features [here](https://hardhat.org/getting-started/).
- **Solidity Documentation**: Dive into Solidity [here](https://soliditylang.org/).

---

## 💬 Get In Touch

Have questions or feedback? Connect with us or contribute to this project!

---

Happy coding! 🎉 Deploy and manage your custom ERC20 token on Ethereum test networks with ease.
