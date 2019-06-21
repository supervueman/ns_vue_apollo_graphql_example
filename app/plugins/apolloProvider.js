import Vue from 'nativescript-vue';
import {
  ApolloClient
} from 'apollo-client';
import {
  HttpLink
} from 'apollo-link-http';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';;
import VueApollo from 'vue-apollo';
// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_API_URL
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
