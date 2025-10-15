// ./config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://strapi.partners.otc-service.com', 'https://strapi.schreiber-ling.de'],
      credentials: false,
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      headers: ['Content-Type','Authorization','Origin','Accept'],
      keepHeaderOnError: true,
    },
  },
  { name: 'strapi::poweredBy', config: { poweredBy: 'Strapi' } },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  { name: 'strapi::session', config: { secure: true, sameSite: 'lax' } },
  'strapi::favicon',
  'strapi::public',
];
