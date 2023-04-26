import { networkHex } from "./constant";
import { Result, failResult } from "./result";




// register

// check is admin

// Check MetaMask installed
const isMetaMaskInstalled = () => {
  if (typeof window.ethereum == 'undefined') {
    return false;
  }

  return true;
}

// Check user's network:
const isValidNetwork = async () => {
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    return networkHex.includes(chainId);
  } catch (error) {
    return false;
  }
}

// Get account from MetaMask
export const signIn = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      return failResult('Please install MetaMask extension!');
    }

    if (!isValidNetwork()) {
      return failResult('This app only work on test networks: Goerli, Ethereum, Ganache Localhost');
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    return new Result(true, accounts[0]);
  } catch (error) {
    return new Result(false, error);
  }
}

// Get current account auth.
export const getAccount = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      return new Result();
    }

    if (!isValidNetwork()) {
      return failResult('This app only work on test networks: Goerli, Ethereum, Ganache Localhost');
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    return new Result(true, accounts[0]);
  } catch (error) {
    return new Result(false, error);
  }
}

export const signOut = async () => {
  console.log('dd');
  try {
    if (!isMetaMaskInstalled()) {
      return failResult('Please install MetaMask extension!');
    }

    if (!isValidNetwork()) {
      return failResult('This app only work on test networks: Goerli, Ethereum, Ganache Localhost');
    }

    await window.ethereum.disconnect();
// console.log(accounts);
    return new Result(true);
  } catch (error) {
    console.log(error);
    return new Result(false, error);
  }

  // if (window.ethereum && window.ethereum.disconnect) {
  //   window.ethereum.disconnect()
  //     .then(() => {
  //       console.log('Đóng kết nối với MetaMask thành công');
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // } else {
  //   console.log('Phương thức disconnect không được hỗ trợ trên MetaMask hiện tại');
  // }

}

// window.ethereum.on('disconnect', handleOnDisconnect);

// function handleOnDisconnect() {
//   console.log('log outtttt....');
// }
