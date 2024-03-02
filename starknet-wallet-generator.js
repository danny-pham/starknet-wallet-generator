const seedPhraseGenerator = require('seed-phrase-generator');
const ethers = require('ethers');

async function createStarkNetWalletFromSeedPhrase(seedPhrase) {

    const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
    const starknetAddress = await wallet.getAddress();
    const starknetPrivateKey = wallet.privateKey;
    return { starknetAddress, starknetPrivateKey };
}

module.exports = {
    createStarkNetWalletFromSeedPhrase
};
