import { Request, Response } from "express";
import { Content } from "src/entity/Content";
import DataLoader from "dataloader";

export interface AppContext {
  req: Request,
  res: Response,
  contentLoader: DataLoader<string, Content>
  translationLoader: DataLoader<string, string>
}