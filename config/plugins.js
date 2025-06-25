// config/plugins.js
module.exports = ({env}) => ({
  'strapi-plugin-sso': {
    enabled: true,
    config: {
      // OpenID Connect
      OIDC_REDIRECT_URI: 'https://strapi.schreiber-ling.de/strapi-plugin-sso/oidc/callback', // URI after successful login
      OIDC_CLIENT_ID: 'strapi',
      OIDC_CLIENT_SECRET: env('OIDC_CLIENT_SECRET'),

      OIDC_SCOPES: 'openid profile email', // https://oauth.net/2/scope/
      // API Endpoints required for OIDC
      OIDC_AUTHORIZATION_ENDPOINT: 'https://keycloak.otc.ddnss.org/realms/strapi/protocol/openid-connect/auth',
      OIDC_TOKEN_ENDPOINT: 'https://keycloak.otc.ddnss.org/realms/strapi/protocol/openid-connect/token',
      OIDC_USER_INFO_ENDPOINT: 'https://keycloak.otc.ddnss.org/realms/strapi/protocol/openid-connect/userinfo',
      OIDC_USER_INFO_ENDPOINT_WITH_AUTH_HEADER: true,
      OIDC_GRANT_TYPE: 'authorization_code', // https://oauth.net/2/grant-types/
      // customizable username arguments
      OIDC_FAMILY_NAME_FIELD: 'family_name',
      OIDC_GIVEN_NAME_FIELD: 'given_name',
    }
  }
})