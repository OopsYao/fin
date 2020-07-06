'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;

        ctx.query = {
            ...ctx.query,
            status: 'published',
        };

        if (ctx.query._q) {
            entities = await strapi.services.post.search(ctx.query);
        } else {
            entities = await strapi.services.post.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.post }));
    },

    /**
     * Retrieve a record.
     *
     * @return {Object}
     */
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.services.post.findOne({ id, status: 'published' });
        return sanitizeEntity(entity, { model: strapi.models.post });
    },

    /**
     * Count records.
     *
     * @return {Number}
     */
    count(ctx) {
        ctx.query = {
            ...ctx.query,
            status: 'published',
        };
        if (ctx.query._q) {
            return strapi.services.post.countSearch(ctx.query);
        }
        return strapi.services.post.count(ctx.query);
    },
};
