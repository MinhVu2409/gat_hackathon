export const connectWallet = async () => {
  return "0x2343546547657";
};

export const hasPFPNft = async () => {
  return false;
};

export const getAllBook = async () => {
  return DEFAULT_BOOK;
};

export const mintPFP = async () => {
  return true;
};

export const mintBookSelf = async (book) => {
  return book;
};

export const DEFAULT_BOOK = Array.from(Array(10).keys()).map((index) => ({
  title: "Book - " + (index + 1),
  author: "Author - " + index + 1,
  ownerAddress: "0x23355234333432423",
}));
