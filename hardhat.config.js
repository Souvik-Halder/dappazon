require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan');

require('hardhat-deploy')
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */


const PRIVATE_KEY=process.env.PRIVATE_KEY;
const GORELI_RPC_URL=process.env.GORELI_RPC_URL;

const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY

const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY
module.exports = {
  // solidity: "0.8.8",
  solidity:{
    compilers:[{version:"0.8.8"},{version:"0.6.6"}]
  },
  networks:{
    goerli:{
      url:GORELI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:5,
      blockConfirmations:6
    },
    
  },

  namedAccounts:{
    deployer:{
      default:0
    },
    users:{
      default:1
    }
  }
};
