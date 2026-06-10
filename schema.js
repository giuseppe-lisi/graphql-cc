export const typeDefs = `#graphql 
    type Game {
        id: ID! # ! equivale al NOT NULL 
        title: String!
        platform: [String!]! # array di stringhe
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
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
`