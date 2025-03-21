module.exports = {
  info: {
    name: 'example',
    description: 'Example model for demonstration purposes',
  },
  options: {
    timestamps: true,
  },
  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'text',
    },
    createdAt: {
      type: 'date',
      default: () => new Date(),
    },
    updatedAt: {
      type: 'date',
      default: () => new Date(),
    },
  },
};