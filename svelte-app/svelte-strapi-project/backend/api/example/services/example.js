module.exports = {
  find: async (ctx) => {
    const examples = await strapi.services.example.find(ctx.query);
    return examples;
  },

  findOne: async (ctx) => {
    const { id } = ctx.params;
    const example = await strapi.services.example.findOne({ id });
    return example;
  },

  create: async (ctx) => {
    const example = await strapi.services.example.create(ctx.request.body);
    return example;
  },

  update: async (ctx) => {
    const { id } = ctx.params;
    const example = await strapi.services.example.update({ id }, ctx.request.body);
    return example;
  },

  delete: async (ctx) => {
    const { id } = ctx.params;
    const example = await strapi.services.example.delete({ id });
    return example;
  }
};