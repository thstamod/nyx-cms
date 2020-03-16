import { createHttpLink } from 'apollo-link-http';

export default createHttpLink({
  uri: 'http://localhost:4000/graphql',
});
