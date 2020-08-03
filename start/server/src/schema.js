const { gql } = require('apollo-server');

const typeDefs = gql`
	# Fetch a list of all upcoming rocket launches
	# Fetch a specific launch by its ID
	# Log in the user
	# Book a launch for a logged-in user
	# Cancel a previously booked launch for a logged-in user

	# Types
	type Launch {
		id: ID!
		site: String
		mission: Mission
		rocket: Rocket
		isBooked: Boolean!
	}

	type Rocket {
		id: ID!
		name: String
		type: String
	}

	type Mission {
		name: String
		missionPatch(size: PatchSize): String
	}

	enum PatchSize {
		SMALL
		LARGE
	}

	type User {
		id: ID!
		email: String!
		trips: [Launch]!
	}

	# Query
`;

module.exports = typeDefs;
