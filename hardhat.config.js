require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/ki7U1A6R79q-pWrQAhuNN29hNoFGxRS5',
      accounts: ['e5df902e466147aac07de2a949f10103f226f798681f20dfa4e5809a212dc9bc'],
    },
  },
};
