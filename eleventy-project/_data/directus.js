import { createDirectus, rest } from '@directus/sdk';

// Gebruik jouw Directus project URL
const directus = createDirectus('https://fdnd-agency.directus.app').with(rest());

export default directus;
