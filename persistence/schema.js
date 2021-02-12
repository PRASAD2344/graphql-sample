import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `

  type Customer {
    customer_id: ID,
    cust_code: String,
    customer_name: String,
    group_name: String,
    topic_name: String,
  }

  type Query{
    getCustomer(customer_id: ID): Customer
    getCustomers: [Customer]
  }

  input CustomerInput{
    customer_id: ID,
    cust_code: String,
    customer_name: String,
    group_name: String,
    topic_name: String,
  }

  type Mutation{
    createCustomer(input: CustomerInput): Customer
    updateCustomer(input: CustomerInput): Customer
    deleteCustomer(customer_id: ID!): String
  }

`;

const schema = makeExecutableSchema({typeDefs, resolvers})

export {
  schema
}

