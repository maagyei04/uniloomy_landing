import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config: OpenNextConfig = {
  default: {
    runtime: "edge",
    // @ts-expect-error - cloudflare adapter is not yet in the official OpenNext types
    adapter: "cloudflare",
  },
};

export default config;
