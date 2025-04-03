import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralHeaderDescription extends Struct.ComponentSchema {
  collectionName: 'components_general_header_descriptions';
  info: {
    displayName: 'header_description';
    icon: 'collapse';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.header-description': GeneralHeaderDescription;
    }
  }
}
