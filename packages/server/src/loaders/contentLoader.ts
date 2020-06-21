import DataLoader from 'dataloader';
import { Content } from "../entity/Content";

export const contentLoader = (): DataLoader<string, Content> =>
new DataLoader(async (keys) => {
  let mutableKeys = keys.map(e => e);
  const contents = await Content.findByIds(mutableKeys);

  const contentMap: {[key: string]: Content} = {};

  contents.forEach((ct: Content) => {
    contentMap[ct.id] = ct;
  });

  return keys.map(k => contentMap[k]);
})