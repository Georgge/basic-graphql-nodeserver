import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Client {
    id: ID
    name: String
    lastName: String
    company: String
    emails: [Email]
    type: ClientType
    orders: [Order]
  }

  type Email {
    email: String
  }

  type Order {
    product: String
    price: Int
  }

  enum ClientType {
    BASIC
    PREMIUM
  }

  type Query {
    getClient(id: ID): Client
  }

  input OrderInput {
    product: String
    price: Int
  }

  input EmailInput {
    email: String
  }

  """ Data to client """
  input ClientInput {
    id: ID
    name: String!
    lastName: String
    company: String
    emails: [EmailInput]!
    type: ClientType!
    orders: [OrderInput]
  }

  """ Mutation for create users """
  type Mutation {
    # Resolover name, input with data and value return
    """ For new client """
    createClient(input: ClientInput) : Client
  }
`);

export default schema;
