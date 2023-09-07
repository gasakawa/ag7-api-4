/**
 * section controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::section.section",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const params = await this.sanitizeQuery(ctx);

      const { results } = await strapi
        .service("api::section.section")
        .find(params);

      return results.map((entity) => ({
        columns: entity.column,
        locale: entity.locale,
        id: entity.id,
      }));
    },
  })
);
