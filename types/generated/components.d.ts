import type { Attribute, Schema } from '@strapi/strapi';

export interface GeneralHeaderDescription extends Schema.Component {
  collectionName: 'components_general_header_descriptions';
  info: {
    displayName: 'header_description';
    icon: 'collapse';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.header-description': GeneralHeaderDescription;
    }
  }
}
