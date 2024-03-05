const Movie = require('../models/Movie');
const User = require('../models/User');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    poster: { type: GraphQLString },
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
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //all movies
    movies: {
      type: new GraphQLList(MovieType),
      // args: {
      //   limit: { type: GraphQLID },
      // },
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

//mutations
const mutationQuery = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //adding a movie
    addMovie: {
      type: MovieType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        plot: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const movie = new Movie({
          title: args.title,
          plot: args.plot,
          type: args.type,
        });
        return movie.save();
      },
    },

    //deleting a movie
    deleteMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Movie.findByIdAndDelete(args.id);
      },
    },

    //adding a user
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
        });
        return user.save();
      },
    },

    //deleting a user
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutationQuery,
});
