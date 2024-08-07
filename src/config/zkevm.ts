export default {
  name: 'zkevm',
  rpc:
    'https://polygonzkevm-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_KEY,
  coingecko: {
    platformId: 'polygon-zkevm',
  },
  trustWalletNetwork: 'polygonzkevm', // doesnt have a tokenlist on https://github.com/trustwallet/assets/tree/master/blockchains/polygonzkevm
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
