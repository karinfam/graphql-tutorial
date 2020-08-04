require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

// Sets up SQLite db
const store = createStore();

const isEmail = require('isemail');
const server = new ApolloServer({
	context: async ({ req }) => {
		const auth = (req.headers && req.headers.authorization) || '';
		const email = Buffer.from(auth, 'base64').toString('ascii');
		if (!isEmail.validate(email)) return { user: null };
		// find a user by their email
		const users = await store.users.findOrCreate({ where: { email } });
		const user = (users && users[0]) || null;
		return { user: { ...user.dataValues } };
	},
	typeDefs,
	resolvers,
	dataSources: () => ({
		launchAPI: new LaunchAPI(), // Connects to API
		userAPI: new UserAPI({ store }) // Connects to SQLite
	}),
	engine: {
		reportSchema: true
	}
});

server.listen().then(({ url }) => {
	console.log(`Server listening at ${url}`);
});
