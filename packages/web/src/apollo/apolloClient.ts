import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://192.168.1.37:4000/graphql'
});

export default client;