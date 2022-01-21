import { Config } from "@stencil/core";

export const config: Config = {
  srcDir: "src",
  outputTargets: [{
    type: "www",
    serviceWorker: null,
  },]
};
