import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db presunto
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
    Query: {
        games: () => {
            return db.games
        },
        reviews: () => {
            return db.reviews
        },
        authors: () => {
            return db.authors
        },
    },
};

// server setup
const server = new ApolloServer({
    // typeDefs -> definitions of data types we want to expose from our graph
    // definiscono L'ASPETTO DEI DATI
    typeDefs,
    // resolver methods
    // come RISPONDIAMO a query al graph
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    list: { port: 4000 },
});

console.log("Server ready on port: ", 4000);
