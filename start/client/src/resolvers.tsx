import gql from 'graphql-tag';
import { ApolloCache, Resolvers } from '@apollo/client';
import * as GetCartItemTypes from './pages/__generated__/GetCartItems';
import * as LaunchTileTypes from './pages/__generated__/LaunchTile';

export const typeDefs = gql`
	extend type Query {
		isLoggedIn: Boolean!
		cartItems: [ID!]!
	}

	extend type Launch {
		isInCart: Boolean!
	}

	extend type Mutation {
		addOrRemoveFromCart(id: ID!): [ID!]!
	}
`;

type ResolverFn = (parent: any, args: any, { cache }: { cache: ApolloCache<any> }) => any;

interface ResolverMap {
	[field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
	// We will update this with our app's resolvers later
}

export const resolvers = {};
