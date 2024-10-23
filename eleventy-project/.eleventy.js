module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/static");
    
    // Voeg watch targets toe om herbouw te triggeren bij wijzigingen
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addWatchTarget("./src/static/");
    
    // Return statement komt aan het einde
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
