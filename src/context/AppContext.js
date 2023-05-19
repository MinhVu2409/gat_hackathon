import { useRouter } from "next/router";
import React, { useState, createContext, useContext, useEffect } from "react";
import { AppPath } from "../components/MainLayout";
import Cookies from "js-cookie";
import * as Helper from "./Helper";

/* ------------- Initial State ------------- */
export const CONNECT_STATUS = {
  NOT_CONNECT: 1,
  CONNECTING: 2,
  MINT_PFP: 3,
  CONNECTED: 4,
};

const INITIAL_STATE = {
  loginStatus: CONNECT_STATUS.NOT_CONNECT,
  walletAddress: "",
  myBook: [],

  login: () => {},
  logout: () => {},
  mintPFP: () => {},
  mintBook: () => {},
  getMyBook: () => {},
};

export const AppContext = createContext(INITIAL_STATE);
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const router = useRouter();

  const [walletAddress, setWalletAddress] = useState();
  const [loginStatus, setLoginStatus] = useState(CONNECT_STATUS.NOT_CONNECT);
  const [myBook, setMyBook] = useState([]);

  const login = async () => {
    setLoginStatus(CONNECT_STATUS.CONNECTING);

    const address = await Helper.connectWallet();

    setTimeout(() => {
      setWalletAddress(address);
      Cookies.set(AppKey.walletAddress, "0x2343546547657");
      handleNavigation();
    }, 1000);
  };

  const logout = () => {
    alert("disconnectWallet");
    setLoginStatus(CONNECT_STATUS.NOT_CONNECT);
    setWalletAddress();
    Cookies.remove(AppKey.walletAddress);
  };

  const mintPFP = async () => {
    const isResult = await Helper.mintPFP();

    if (isResult) {
      alert("mintPFP success");
      setLoginStatus(CONNECT_STATUS.CONNECTED);
    } else {
      alert("mintPFP error");
    }

    return isResult;
  };

  const mintBook = async (book) => {
    const bookNft = await Helper.mintBookSelf(book);
    if (bookNft) {
      alert(`mintBook success: ${book.title} - ${book.author}`);
      setMyBook((preState) => [...preState, bookNft]);
    } else {
      alert("mintBook error");
    }

    return Boolean(bookNft);
  };

  const getMyBook = async () => {
    const list = await Helper.getAllBook();
    setMyBook(list);
    return list;
  };

  const handleNavigation = async () => {
    const hasMemberNFT = await Helper.hasPFPNft();
    if (hasMemberNFT) {
      setLoginStatus(CONNECT_STATUS.CONNECTED);
      router.replace(AppPath.MY_BOOK);
    } else {
      setLoginStatus(CONNECT_STATUS.MINT_PFP);
    }
  };

  useEffect(() => {
    let retryCount = 0;
    const interval = setInterval(() => {
      if (retryCount >= 5) clearInterval(interval);
      const cookieAddress = Cookies.get(AppKey.walletAddress);

      if (cookieAddress) {
        clearInterval(interval);
        setWalletAddress(cookieAddress);
        getMyBook();
        handleNavigation();
      }
      retryCount++;
    }, 500);
  }, []);

  return (
    <AppContext.Provider
      value={{
        walletAddress,
        loginStatus,
        myBook,

        login,
        logout,
        mintPFP,
        mintBook,
        getMyBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const AppKey = {
  walletAddress: "walletAddress",
};
