import "reflect-metadata";
import "ts-tiny-invariant";
import { buildSchema } from "type-graphql";
import { resolvers } from "../../prisma/generated/type-graphql";
import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro"
import { PrismaClient } from "@prisma/client";
import prisma from "../../config/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
    allowMethods: ["POST", "OPTIONS", "GET", "HEAD"],
});

interface Context {
    prisma: PrismaClient;
}

export const config = {
    api: {
    bodyParser: false,
    },
};

const functionHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const schema = await buildSchema({
    resolvers,
    validate: false,
    });

    const apolloServer = new ApolloServer({
    context: (): Context => ({ prisma }),
    schema,
    introspection: true,
    });
    const startServer = apolloServer.start();
    await startServer;
    return apolloServer.createHandler({
    path: "/api/graphql",
    })(req, res);
};

export default cors((req: any, res: any) => {
    if (req.method === "OPTIONS") {
    res.end();
    return false;
    }

    return functionHandler(req, res);
});
