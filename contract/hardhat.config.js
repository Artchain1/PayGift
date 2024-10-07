require("@nomiclabs/hardhat-ethers");
require("dotenv").config();


module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
    },

    'base-sepolia':{
      url:"https://sepolia.base.org",
      chainId: 84532,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 1000000,


    }


    // celoMainnet: {
    //   url: process.env.CELO_URL,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`]
    // }
  }
};