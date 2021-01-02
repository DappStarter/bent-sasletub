require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot current rifle ranch purse install bag army gesture'; 
let testAccounts = [
"0x8f0effaf9eb1735fe8444d8f21791936b016c612d12d71d1c95290c047350949",
"0x9beeee056304a86e0e5abf2c3ba0f0b9b46a4d5aa3c6ff7cbb61810ecdc97cc0",
"0x5c2e21b9dc76bdda71f19c0448b7d0a43ad8d6e6d8570ee2081849c1a9428db4",
"0xefa58962c41f28254d51167762eb6e76178e26bff553a8a051a7e30ffc51efc9",
"0xbbd07a52436dcf6e4a39ec067dac1108d942ebe5730daae90f2e57154330fe0a",
"0x9d6eddec869b8b98d3dca8c43ef86773d56c416492a3421b55a9b6ae007c3117",
"0xfc367c0c2158137695d1adf610bd848bbbf9414f435f66d39365e5437c267bd0",
"0x45e0336a05c42a8089945ada6dfd6100c035d57313785071d5c65318a261cc3f",
"0xf2302c52d0b5cd87b6898b0afe830ec164b39641bfcaf1bcb653c249273a4b13",
"0x1ebf17d1da082adee233a44639ddb208aa4afa4ada11d5c0f1a7446a7ff1442d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
