import { IEmailBody, IPasswordBody, ITokenUser } from "../shared/Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchFindPassword = (callback: any, body: IEmailBody): any => {
  fetch(`${url}/auth/findpw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    credentials: "include"
  }).then((res: Response) => callback(res.status));
};

export const fetchUserResetToken = (callback: any, token: string): any => {
  fetch(`${url}/user?resetPasswordToken=${token}`, {
    credentials: "include"
  }).then((res: Response) => callback(res.status));
};

export const fetchPasswordChange = (
  callback: any,
  body: IPasswordBody,
  token: string
): any => {
  fetch(`${url}/user?resetPasswordToken=${token}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    method: "PATCH"
  }).then((res: Response) => callback(res.status));
};
