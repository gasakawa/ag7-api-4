/**
 * menu controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::menu.menu",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      const params = await this.sanitizeQuery(ctx);
      const { id, locale, link, logo } = await strapi
        .service("api::menu.menu")
        .find(params);

      const links = link.map((l) => ({
        id: l.id,
        label: l.label,
        url: l.url,
      }));

      return {
        id,
        locale,
        links,
        logo: {
          id: logo.id,
          name: logo.name,
          alt: logo.alternativeText,
          title: logo.caption,
          mime: logo.mime,
          url: logo.url,
        },
      };
    },
  })
);
