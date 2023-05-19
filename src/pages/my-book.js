import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";
import EmptyBook from "../components/sn-my-book/EmptyBook";
import MyBookItem from "../components/sn-my-book/MyBookItem";
import SendRequestDialog from "../components/sn-my-book/SendRequestDialog";
import { useAppContext } from "../context/AppContext";

const MyBook = () => {
  const { myBook } = useAppContext();

  const [bookList, setBookList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isShowSwap, setIsShowSwap] = useState(false);
  const [selectedBook, setSelectedBook] = useState();

  const handleSwap = (book) => {
    setIsShowSwap(true);
    setSelectedBook(book);
  };

  const handleCloseDialog = () => {
    setIsShowSwap(false);
    setSelectedBook();
  };

  useEffect(() => {
    if (!isFetching) {
      setBookList(myBook);
    }
  }, [myBook, isFetching]);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  }, []);

  const isEmpty = !isFetching && bookList.length === 0;

  return (
    <Container>
      {isEmpty ? (
        <EmptyBook />
      ) : (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {bookList.map((book, index) => (
            <MyBookItem key={index} book={book} onSwap={handleSwap} />
          ))}
        </Stack>
      )}
      {isShowSwap && (
        <SendRequestDialog
          open={SendRequestDialog}
          book={selectedBook}
          onClose={handleCloseDialog}
        />
      )}
    </Container>
  );
};

export default MyBook;
