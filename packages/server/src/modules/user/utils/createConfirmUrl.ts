import { redis } from "../../../redis"
import { v4 } from "uuid"
import { tokenPrefixes } from "../../../constants/tokenPrefix";


export const createConfirmUrl = (userId: string) => {
  const token = v4();
  redis.set( tokenPrefixes.CONFIRM_EMAIL + token, userId, "ex", 60*60*24);
  return `${process.env.APP_URL}/confirm/${token}`;
}