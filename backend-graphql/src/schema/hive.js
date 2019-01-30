import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        hives: [Hive!]
        hive(id: ID!): Hive
    }

    extend type Mutation {
        createHive(title: String!, location: LocationInput!, description: String!, user: ID!): Hive!
    }

    type Hive {
        key: ID!
        title: String!
        location: Location!
        attending_users: [User!]
        date_created: Float!
        created_by: String
        description: String!
    }
  
    input LocationInput {
        lat: Float!
        lon: Float!
    }
    
    type Location {
        lat: Float!
        lon: Float!
    }
`;