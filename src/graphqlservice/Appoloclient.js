import {graphqlUrl} from './Config'
 import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from "apollo-link-context";
import { HttpLink } from '@apollo/client';
 

const authLink = setContext(async(request, {headers}) => {
  const userTok = await localStorage.getItem('MyToken');
  return {
    ...headers,
    headers:{
      authorization :`JWT ${userTok}`,
     },
  }
});
const httpLink = new HttpLink({uri :graphqlUrl})  
const link =authLink.concat(httpLink);

    const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
      addTypename: false
    }),

  });
  



export default client;