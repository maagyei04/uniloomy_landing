import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config: OpenNextConfig = {
  default: {
    runtime: "edge",
    adapter: "cloudflare",
  },
};

export default config;
