import { LOGIN_KEY_STORAGE, networkHex } from "./constant";
import { Result, failResult } from "./result";

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

const preAuth = () => {
  if (!isMetaMaskInstalled()) {
    return failResult('Please install MetaMask extension!');
  }

  if (!isValidNetwork()) {
    return failResult('This app only work on test networks: Goerli, Ethereum, Ganache Localhost');
  }

  return null;
}

// Login using metamask
export const logIn = async () => {
  try {
    const isValidPreAuth = preAuth();

    if (isValidPreAuth) {
      return isValidPreAuth;
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    localStorage.setItem(LOGIN_KEY_STORAGE, accounts[0]);

    return new Result(true, accounts[0]);
  } catch (error) {
    return new Result(false, error);
  }
}

// Logout
export const logOut = () => {
  if (localStorage.key(LOGIN_KEY_STORAGE)) {
    localStorage.removeItem(LOGIN_KEY_STORAGE);
  }
}

// Get current account logined.
export const getCurrentAccountLogined = () => {
  try {
    let account = null;
    const isValidPreAuth = preAuth();

    if (isValidPreAuth) {
      return isValidPreAuth;
    }

    // const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    // // MYTODO: login nhieu account thi key local storage ko dung
    // // MYTODO: meta mask tự đòi login 
    // if (accounts) {
    //   account = localStorage.getItem(LOGIN_KEY_STORAGE);
    // }

    account = localStorage.getItem(LOGIN_KEY_STORAGE);
    console.log(account);

    return new Result(true, account);
  } catch (error) {
    return new Result(false, error);
  }
}

export const getCurrentAccountLoginedV2 = async () => {
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });

  if (accounts[0]) {
    localStorage.setItem(LOGIN_KEY_STORAGE, accounts[0]);
  } else {
    localStorage.removeItem(LOGIN_KEY_STORAGE);
    window.location.href = '/';
  }
}

window.ethereum.on('accountsChanged', (error) => {
  getCurrentAccountLoginedV2();
});
