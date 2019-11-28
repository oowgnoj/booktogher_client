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

export const validatePassword = (password: string): any => {
  const passwordRegExp: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  // 7 to 15 characters which contain at least one numeric digit and a special character
  return password.match(passwordRegExp);
};

export const validateEmail = (address: string): boolean => {
  const emailRegExp: RegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailRegExp.test(address); // 형식에 맞는 경우 true 리턴
};
