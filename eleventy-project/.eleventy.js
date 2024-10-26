import { fetchData } from "./getData.js";

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("tm24_language", async () => {
    return await fetchData("tm24_language");
  });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/static/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
