// _data/directus.js
const { Directus } = require('@directus/sdk');

module.exports = async () => {
  const directus = new Directus('https://fdnd-agency.directus.app');
  
  try {
    const accounts = await directus.items('tm24_account').readMany();
    const buddys = await directus.items('tm24_buddy').readMany();
    const profiles = await directus.items('tm24_profile').readMany();
    const stories = await directus.items('tm24_story').readMany();
    const personal_playlists = await directus.items('tm24_personal_playlist').readMany();
    const languages = await directus.items('tm24_language').readMany();

    return {
      accounts,
      buddys,
      profiles,
      stories,
      personal_playlists,
      languages
    };
  } catch (error) {
    console.error("Error fetching data from Directus:", error);
    return {};
  }
};
