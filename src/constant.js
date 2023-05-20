import { Keypair } from "@solana/web3.js"

const secretKey = Uint8Array.from([8,216,58,248,238,129,22,202,156,27,210,165,250,1,222,45,156,10,46,199,222,216,187,169,3,130,139,158,26,59,125,16,74,169,13,149,27,68,197,100,161,241,126,241,154,177,103,186,100,200,246,156,172,137,33,16,224,203,39,66,76,28,120,134])

export const adminKeyPair = Keypair.fromSecretKey(secretKey);

export const apiKey = 'YvFHROCKKEdZmqit';

export const collectionMint = '4DiUDRC59ZCKURKN3YA1Qvtkt5JrNQQ4GwVDLeeyNmuS';

export const candyMachineId = 'CNRmK8MzQ9K7ds8W5Hq15dm2R9B8VDVd7pSFnVZiCWVP';