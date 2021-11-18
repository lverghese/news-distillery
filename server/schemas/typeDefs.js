const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    users: [User]
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    articleCount: Int
    savedArticles: [Article]
}

type Article{
    _id: ID!
    articleId: ID
    author: String
    title: String
    urlToImage: String
    description: String
    url: String
}

type Auth {
    token: ID!
    user: User
}

type savedArticle{
    articleId: ID
    author: String
    title: String
    description: String
    urlToImage: String
    url: String
}

type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveArticle(articleId: ID): User
    removeArticle(articleId: ID!): User
} 
`;
//  https://egghead.io/lessons/apollo-wrap-graphql-mutation-arguments-with-a-graphql-input-type
module.exports = typeDefs;
