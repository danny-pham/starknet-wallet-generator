# StarkNet Wallet Generator

## Introduction
StarkNet Wallet Generator is a JavaScript library that allows you to generate StarkNet wallets (addresses) from seed phrases. It relies on the Seed Phrase Generator library to generate seed phrases and the ethers.js library to interact with Ethereum wallets.

## Installation
You can install the library via npm:

```
npm install starknet-wallet-generator
```

## Usage
Here's how to use the library to generate StarkNet wallets from seed phrases:

```
const starknetWalletGenerator = require('starknet-wallet-generator');

// Generate seed phrase
const seedPhrase = starknetWalletGenerator.generateSeedPhrase();

// Create StarkNet wallet from seed phrase
starknetWalletGenerator.createStarkNetWalletFromSeedPhrase(seedPhrase)
    .then(starknetWallet => {
        console.log('StarkNet Address:', starknetWallet.starknetAddress);
        console.log('StarkNet Private Key:', starknetWallet.starknetPrivateKey);
    })
    .catch(error => console.error('Error creating StarkNet wallet:', error));
```

The createStarkNetWalletFromSeedPhrase function takes a seed phrase as input and returns the corresponding StarkNet wallet, including the StarkNet address and private key.

## License
This library is released under the MIT License.