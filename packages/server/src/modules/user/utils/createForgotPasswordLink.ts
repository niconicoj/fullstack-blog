import { redis } from "../../../redis"
import { v4 } from "uuid"
import { tokenPrefixes } from "../../../constants/tokenPrefix";


export const createForgotPasswordLink = (userId: string) => {
  const token = v4();
  redis.set( tokenPrefixes.FORGOT_PASSWORD + token, userId, "ex", 60*60*24);
  return `${process.env.APP_URL}/reset-password/${token}`;
}