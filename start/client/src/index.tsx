import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject, HttpLink, useQuery } from '@apollo/client';
// import { HttpLink } from 'apollo-link-http';
import { resolvers, typeDefs } from './resolvers';
import gql from 'graphql-tag';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import Login from './pages/login';
import injectStyles from './styles';

const cache = new InMemoryCache();

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

// const link = new HttpLink({
// 	uri: 'http://localhost:4000/graphql',
// 	headers: {
// 		authorization: localStorage.getItem('token')
// 	}
// });

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	cache,
	link: new HttpLink({
		uri: 'http://localhost:4000',
		headers: {
			authorization: localStorage.getItem('token')
		}
	}),
	typeDefs,
	resolvers
});

// cache.writeData({
// 	data: {
// 		isLoggedIn: !!localStorage.getItem('token'),
// 		cartItems: []
// 	}
// });

function IsLoggedIn() {
	const { data } = useQuery(IS_LOGGED_IN);
	return data.isLoggedIn ? <Pages /> : <Login />;
}

injectStyles();
ReactDOM.render(
	<ApolloProvider client={client}>
		{/* <IsLoggedIn /> */}
		<Pages />
	</ApolloProvider>,
	document.getElementById('root')
);
