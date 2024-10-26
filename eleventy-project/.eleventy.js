import { fetchData } from "./getData.js";

export default function (eleventyConfig) {
  // Voeg meerdere collecties toe
  eleventyConfig.addGlobalData("accounts", async () => await fetchData("tm24_account"));
  eleventyConfig.addGlobalData("buddys", async () => await fetchData("tm24_buddy"));
  eleventyConfig.addGlobalData("profiles", async () => await fetchData("tm24_profile"));
  eleventyConfig.addGlobalData("stories", async () => await fetchData("tm24_story"));
  eleventyConfig.addGlobalData("personal_playlists", async () => await fetchData("tm24_personal_playlist"));
  eleventyConfig.addGlobalData("languages", async () => await fetchData("tm24_language"));

  // Voeg passthrough en watch targets toe voor CSS en statische bestanden
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/static/");

  // Return statement komt aan het einde
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}
