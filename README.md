# Modifying State Variables
[Alchemy tutorial link](https://university.alchemy.com/course/ethereum/md/61784a02fbbc0200040e8f0d)
</br> My work: [🔮 Contract0xF0Fc64952B499878A371A808A0D3e630B3CBc0d1](https://sepolia.etherscan.io/address/0xF0Fc64952B499878A371A808A0D3e630B3CBc0d1)

### 🚀 Update:
- created string variable, modified it and tested it
- deployed to Sepolia
- replaced deprecated functions with latest version

### Workflow:
- `npm install`
- `touch .env`
- store Alchemy api url (for Sepolia) and private key
- `npx hardhat compile`
- `npx hardhat test` two tests should pass
- `npx hardhat run scripts/deploy.js --network sepolia`
- go to https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS and check your work
