export default {
  Query: {
    hi: (parent, args, context, info) => parent + args + context + info,
  },
};
