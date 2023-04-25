import { toast } from "react-toastify";
import { networkHex } from "./constant";


// login

// logout

// register

// check is admin

// Result object
export class Result {
  constructor(isSuccess = false, data = null) {
    this.isSuccess = isSuccess;
    this.data = data;
  }
}

// Check MetaMask installed
export const isMetaMaskInstalled = () => {
  if (typeof window.ethereum == 'undefined') {
    return false;
  }

  return true;
}

// Check user's network:
export const isValidNetwork = async () => {
  try {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    return networkHex.includes(chainId);
  } catch (error) {
    console.log(error);
  }

  return false;
}

// Get account from MetaMask
export const signIn = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      toast('Please install MetaMask extension!');

      return new Result();
    }

    if (!isValidNetwork()) {
      toast('This app can\'t work on this network!');

      return new Result();
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    return new Result(true, accounts[0]);
  } catch (error) {
    return new Result(false, error);
  }

  return new Result();
}

export const getAccount = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      return new Result();
    }

    if (!isValidNetwork()) {
      toast('This app can\'t work on this network!');

      return new Result();
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    return new Result(true, accounts[0]);
  } catch (error) {
    return new Result(false, error);
  }

  return new Result();
}


/**
 * state: sign in, sign out, sign up
 */
