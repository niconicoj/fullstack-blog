import DataLoader from "dataloader";
import { Translation } from "../entity/Translation";
import { In } from "typeorm";

export const translationLoader = (locale: string): DataLoader<string, string> =>
  new DataLoader(async (keys) => {
    const mutableKeys = keys.map(e => e);
    const translations = await Translation.find({contentId: In(mutableKeys), locale: locale});
    const translationMap: {[key: string]: string} = {};
    translations.forEach((tr: Translation) => {
      translationMap[tr.contentId] = tr.text;
    }); 
    const result = keys.map(k => translationMap[k] ?? null);
    return result;
  })