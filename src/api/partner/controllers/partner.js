'use strict';

/**
 * partner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::partner.partner', ({ strapi }) => ({
    async findOne(context) {
        const partner_id = context.params.id

        if (!partner_id || typeof partner_id !== 'string') {
            throw new Error('Invalid partner_id')
        }

        const sanitizedPartnerId = partner_id.trim()

        if (sanitizedPartnerId.length === 0 || sanitizedPartnerId.length > 255) {
            throw new Error('Invalid partner_id')
        }

        const entity = await strapi.db.query('api::partner.partner').findOne({
            where: { partner_id: sanitizedPartnerId },
            populate: {
                tags: true,
                features: true,
                quotes: true,
                overview_media: true,
                teaser_media: true
            }
        })

        if (!entity) {
            throw new Error('Partner not found')
        }

        const sanitizedEntity = await this.sanitizeOutput(entity, context)

        return this.transformResponse(sanitizedEntity, context)
    }
}));
