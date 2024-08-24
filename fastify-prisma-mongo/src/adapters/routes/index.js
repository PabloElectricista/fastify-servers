export default function registerRoutes(fastify, routes) {
  routes.forEach((route) => {
    fastify.route(route);
  });
}
