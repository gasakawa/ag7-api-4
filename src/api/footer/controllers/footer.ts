/**
 * footer controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::footer.footer",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const params = await this.sanitizeQuery(ctx);

      return await strapi.service("api::footer.footer").find(params);
    },
  })
);
