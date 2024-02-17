const Movie = require('../models/Movie');
const User = require('../models/User');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    plot: { type: GraphQLString },
    year: { type: GraphQLInt },
    type: { type: GraphQLString },
    movieId: { type: GraphQLID },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //all movies
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find();
      },
    },
    //movie by Id
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Movie.findById(args.id);
      },
    },
    //all users
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find();
      },
    },
    //user by Id
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
