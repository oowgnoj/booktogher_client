export const modifyForm = (entireBook: any) => {
  const toReadSimple: any = entireBook[0].map((el: any) => {
    return { book: el.book._id };
  });
  const readingSimple: any = entireBook[1].map((el: any) => {
    return { book: el.book._id, start: el.start, goal: el.goal };
  });
  const finishedSimple: any = entireBook[2].map((el: any) => {
    return { book: el.book._id, start: el.start, end: el.end };
  });
  const data = {
    to_read: toReadSimple,
    reading: readingSimple,
    finished: finishedSimple
  };
  return data;
};

export const validatePassword = (password: string): any => {
  // Password must contain at least one number. & >=8
  return password.match(/\d+/g) && password.length >= 8;
};

export const validateEmail = (address: string): boolean => {
  const emailRegExp: RegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailRegExp.test(address); // 형식에 맞는 경우 true 리턴
};
