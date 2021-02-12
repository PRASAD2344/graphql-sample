import express from 'express'
import { schema } from './persistence/schema'
import { graphqlHTTP } from 'express-graphql'

const app = express()

process.on('unhandledRejection', error => {
  console.log(error.message);
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(8282, () => console.log('Running on server port 8282'))