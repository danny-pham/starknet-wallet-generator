const starknetWalletGenerator = require('./starknet-wallet-generator');

const seedPhrase = starknetWalletGenerator.generateSeedPhrase();

starknetWalletGenerator.createStarkNetWalletFromSeedPhrase(seedPhrase)
    .then(starknetWallet => {
        console.log('StarkNet Address:', starknetWallet.starknetAddress);
        console.log('StarkNet Private Key:', starknetWallet.starknetPrivateKey);
    })
    .catch(error => console.error('Error creating StarkNet wallet:', error));
