import * as dotenv from 'dotenv';
dotenv.config();

import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import session from 'express-session';
import connectRedis from 'connect-redis';
import { RedisClient } from 'redis';
import { redis } from './redis';

import RootResolver from "./modules/RootResolver";
import { contentLoader } from './loaders/contentLoader';
import { translationLoader } from './loaders/translationLoader';


(async () => {
  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development",
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: RootResolver,
      validate: true,
      authChecker: ({ context: {req} }, roles) => {
        console.log("role : ",roles);
        if(!req.session.userId) return false;
        if(!roles.includes(req.session.role)) return false;
        return true;
      }
    }),
    context: ({ req, res }) => ({ 
      req, 
      res,
      contentLoader: contentLoader(),
      translationLoader: translationLoader(req.session!.locale ?? 'en')
    })  
  });

  const RedisStore = connectRedis(session);
  const sessionOption: session.SessionOptions = {
    store: new RedisStore({
      client: (redis as unknown) as RedisClient,
    }),
    name: "qid",
    secret: process.env.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
    },
  };

  app.use(session(sessionOption));

  apolloServer.applyMiddleware({ app, cors: true });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
