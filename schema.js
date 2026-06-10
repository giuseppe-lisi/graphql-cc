export const typeDefs = `#graphql 
    type Game {
        id: ID! # ! equivale al NOT NULL 
        title: String!
        platform: [String!]! # array di stringhe
        reviews: [Review!] # possiamo non avere reviews, ma se il campo è popolato deve essere di tipo Review
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    # pseudo endpoint
    type Query {
        reviews: [Review]
        # specifica che per ottenere una singola review l'utente deve fornire una variabile id
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): [Game]
        deleteGame(id: ID!): [Game]
    }
    input AddGameInput {
        title: String!,
        platform: [String!]
    }
`;
