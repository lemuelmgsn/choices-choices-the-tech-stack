import fetch from "node-fetch";

export async function fetchData(collection) {
  try {
    const response = await fetch(`https://fdnd-agency.directus.app/items/${collection}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Fout bij het ophalen van data:", error);
    return null;
  }
}
