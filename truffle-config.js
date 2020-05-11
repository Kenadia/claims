const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  compilers: {
    solc: {
      version: '0.6.7',
      docker: process.env.DOCKER_COMPILER !== 'false',
      parser: 'solcjs',
      settings: {
        optimizer: {
          enabled: true,
          runs: 10000,
        },
      },
    },
  },
  networks: {
    test: {
      host: '0.0.0.0',
      port: 8545,
      gasPrice: 1,
      network_id: 1001,
    },
    main: {
      network_id: 1,
      provider: () => new HDWalletProvider(
        [process.env.ETHEREUM_PRIVATE_KEY],
        process.env.ETHEREUM_HTTP_URL,
        0,
        1,
      ),
      gasPrice: Number(process.env.GAS_PRICE),
      gas: 4900000,
      from: process.env.ETHEREUM_ADDRESS,
      timeoutBlocks: 500,
    },
  },
  mocha: {
    timeout: 5000,
  },
}
