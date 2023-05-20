import {  Account, clusterApiUrl, Connection,Keypair,PublicKey, Transaction } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { adminKeyPair, apiKey, candyMachineId, collectionMint } from "constant";
import Cookies from "js-cookie";
import { AppKey } from "./AppContext";
import axios from "axios";
import * as _ from 'lodash';

export const connectWallet = async () => {
  const phantom = new PhantomWalletAdapter();
  //await phantom.disconnect();
  await phantom.connect(); 
  const wallet = {
      address: phantom.publicKey.toBase58(),
  };

  return wallet.address;
};

export const hasPFPNft = async () => {
  try{
    const response = await axios({
      // Endpoint to send files
      url: `https://api.shyft.to/sol/v2/nft/read_all?network=devnet&address=${Cookies.get(AppKey.walletAddress)}`,
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });
  
    const nfts = response.data.result.nfts;
    console.log(nfts);
  
    if (_.isEmpty(nfts)) {
      return false;
    }
  
    const pfp = nfts
      .filter(
        (nft) => nft.collection.address === collectionMint
          && nft.collection.verified === true
      );
    console.log(pfp);
  
    if (!_.isEmpty(pfp)) {
      return true;
    }
  
    return false;

  }catch(err){
    console.log(err);
  }
  
};

export const getAllBook = async () => {
  return DEFAULT_BOOK;
};

export const mintPFP = async () => {
  try{
    const phantom = new PhantomWalletAdapter();
  //await phantom.disconnect();
  await phantom.connect(); 
  const rpcUrl = clusterApiUrl('devnet');
  const connection = new Connection(rpcUrl,"confirmed");
    let formDataCreateCandyMachine = new FormData();
    formDataCreateCandyMachine.append("network", "devnet");
    formDataCreateCandyMachine.append("wallet", Cookies.get(AppKey.walletAddress));
    formDataCreateCandyMachine.append("symbol", "TSTSWG2");
    formDataCreateCandyMachine.append("max_supply", 0);
    formDataCreateCandyMachine.append("royalty", 333);
    formDataCreateCandyMachine.append("collection",collectionMint );
    formDataCreateCandyMachine.append("items_available", 3);
    formDataCreateCandyMachine.append("amount", 0.4);
    
    const responeCreate = await axios({
      url: "https://api.shyft.to/sol/v1/candy_machine/create",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        Accept: "*/*",
        // "Access-Control-Allow-Origin": "*",
      },
      data : formDataCreateCandyMachine,
    })

    console.log("responeCreate",responeCreate.data.result.candy_machine);
    let formDataInsert = new FormData();
    formDataInsert.append("network","devnet")
    formDataInsert.append("wallet",Cookies.get(AppKey.walletAddress))
    formDataInsert.append("candy_machine",responeCreate.data.result.candy_machine)

    const responseInsert = await axios({
      url: "https://api.shyft.to/sol/v1/candy_machine/insert",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        Accept: "*/*",
        // "Access-Control-Allow-Origin": "*",
      },
      data : formDataInsert,
    })

    console.log("responseInsert",responseInsert);

  let formData = new FormData();
	formData.append("network", "devnet");
	formData.append("wallet", Cookies.get(AppKey.walletAddress));
  formData.append("authority", adminKeyPair.publicKey.toString());
  formData.append("candy_machine", candyMachineId);
	formData.append("fee_payer", adminKeyPair.publicKey.toString());

  

	const response = await axios({
		// Endpoint to send files
		url: "https://api.shyft.to/sol/v1/candy_machine/mint",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": apiKey,
			Accept: "*/*",
			// "Access-Control-Allow-Origin": "*",
		},
		// Attaching the form data
		data: formData,
	});

  if (response.data.success !== true) {
    return false;
  }

  const transaction = Transaction.from(
    Buffer.from(response.data.result.encoded_transaction, 'base64')
  );
  transaction.partialSign(adminKeyPair);
  const confirmTransaction = await connection.sendRawTransaction(
    transaction.serialize()
  );
    console.log("confirmTransaction",confirmTransaction);
  const check = await connection.confirmTransaction({signature:confirmTransaction},'finalised');

  console.log(check);
  if (check.value.err) {
    return false;
  }

  return true;
  }catch(err){
    console.log(err);
  }
};

export const mintBookSelf = async (book) => {
  return book;
};

export const DEFAULT_BOOK = Array.from(Array(10).keys()).map((index) => ({
  title: "Book - " + (index + 1),
  author: "Author - " + index + 1,
  ownerAddress: "0x23355234333432423",
}));
