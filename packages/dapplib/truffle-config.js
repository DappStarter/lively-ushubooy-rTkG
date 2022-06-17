require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rival soap attitude give kiwi tattoo genuine'; 
let testAccounts = [
"0xc3bbcab6941dd8975c9c7c633523129f43fb3bf29172d1a948c71a4369dbf4dd",
"0xd65d1457b290893170ee50944b4ab99a3cad415b066c94e3c5aa1064e7a0d692",
"0x884ebf95ad9a351f7007650bb7d3f6264bb8df8aad2f5e0d3c93f0b2dd44489f",
"0x8cfc4ab7f09a4c302d53254bfbdfc489c79b8adb17d71a919d781c0c27662f95",
"0xde036f83923e3fd44b9f6a55c2943d26874994233d536f7790ae88adb37996ae",
"0xd8a8900402586b3de9d0ec158a106cbedb1df6bafe30f0552a76d17a7c8ecbf7",
"0x339e8ab71545b304cf4c5b949b2dacc85ab909b751bec9b1564dc0f5215bd882",
"0x1d5224d8872614a4432695b8c0a094038412a92271fee17ca0eeff4968c41734",
"0x64b2babe4c928d79f537e6e170b871b2a5f66cb6fd33a0ae51e3fd48776e064b",
"0xb8224cc23055f294b7023b39a6863f8ddcefd5eb2de216de9099b7d275707de0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

