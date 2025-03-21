module.exports = {
  async find(ctx) {
    const examples = await strapi.services.example.find();
    return examples;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const example = await strapi.services.example.findOne({ id });
    return example;
  },

  async create(ctx) {
    const example = await strapi.services.example.create(ctx.request.body);
    return example;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const example = await strapi.services.example.update({ id }, ctx.request.body);
    return example;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const example = await strapi.services.example.delete({ id });
    return example;
  }
};