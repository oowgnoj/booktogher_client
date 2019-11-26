export const modifyForm = (entireBook: any) => {
  const toReadSimple: any = entireBook[0].map((el: any) => {
    return { book: el.book._id };
  });
  const readingSimple: any = entireBook[1].map((el: any) => {
    return { book: el.book._id, start: el.book.start, goal: el.book.goal };
  });
  const finishedSimple: any = entireBook[2].map((el: any) => {
    return { book: el.book._id, start: el.book.start, end: el.book.end };
  });
  const data = {
    to_read: toReadSimple,
    reading: readingSimple,
    finished: finishedSimple
  };
  return data;
};
