const strapi = require('strapi');
const strapiApp = strapi();

strapiApp.start().then(() => {
  console.log('Strapi server is running on http://localhost:1337');
});