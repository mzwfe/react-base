import { infoRes } from "../mock";
import { infoType } from "../types/serviceTypes";

export function loginXHR(username: string, password: string): Promise<infoType> {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "888888") {
      setTimeout(() => {
        resolve(infoRes);
      }, 1000);
    } else {
        reject();
    }
  })
}