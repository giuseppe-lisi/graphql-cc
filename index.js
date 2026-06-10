import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db presunto
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
    Query: {
        reviews: () => {
            return db.reviews
        },
        // _ sostituisce l'argomento parent, args ci permette di accedere a variabili passate dal FE
        // NOTE: prende anche context -> poco importante ATM
        review: (_, args) => {
            // in questo caso posso usare semplicemente metodo find js per trovare la review sulla base dell'id passato
            return db.reviews.find(review => review.id == args.id)
        },
        games: () => {
            return db.games
        },
        game: (_, args) => {
            return db.games.find(game => game.id == args.id)
        },
        authors: () => {
            return db.authors
        },
        author: (_, args) => {
            return db.authors.find(author => author.id == args.id)
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
