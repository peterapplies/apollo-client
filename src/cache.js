import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        links: {
          keyArgs: false,
          merge(existing, incoming) {
            let links = [];
            if (existing && existing.links) {
              links = links.concat(existing.links);
            }
            if (incoming && incoming.links) {
              links = links.concat(incoming.links);
            }
            return {
              ...incoming,
              links
            };
          }
        }
      }
    }
  }
});