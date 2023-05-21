import { Keypair } from "@solana/web3.js"

const secretKey = Uint8Array.from([8,216,58,248,238,129,22,202,156,27,210,165,250,1,222,45,156,10,46,199,222,216,187,169,3,130,139,158,26,59,125,16,74,169,13,149,27,68,197,100,161,241,126,241,154,177,103,186,100,200,246,156,172,137,33,16,224,203,39,66,76,28,120,134])

export const adminKeyPair = Keypair.fromSecretKey(secretKey);

export const apiKey = 'YvFHROCKKEdZmqit';

export const collectionMint = 'DgrMbshdoKV8vWnsDAcGNseMoMB7U3sJYpcUKWXSW171';

export const candyMachineId = '9wxWFzSQXzxgQvXLwGn5XQZm3R2LC3zvqwUf2hM2j6XG';

export const bookCollectionMint = 'CJVaC46biLogo9YBnBYrpa7BqviXP34dMBcNPat5B8Fs';

export const bookCandyMachineId = '2aXfXeeuGmHxcz5RYwNVKkSQJirhRgRu6Ze3HaLBkatN';