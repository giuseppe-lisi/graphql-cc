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
        games: [Game]
        authors: [Author]
    }
`