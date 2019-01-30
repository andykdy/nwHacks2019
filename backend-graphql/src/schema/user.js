import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        user(id: ID!): User
        users: [User!]
    }
    
    extend type Mutation {
        createUser(id: ID!): User!
        addPointsToUser(id: ID!, points: Int!): User!
    }
    
    type User {
        id: ID!
        badges: [String!]
        rank: String!
        points: Int!
    }
`;