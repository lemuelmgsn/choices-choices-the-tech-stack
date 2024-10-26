import directus from './directus.js';
import { readItems } from '@directus/sdk';

export default async () => { 
    try {
        // Verzoek om de items uit te lezen
        const data = await directus.request(readItems('tm24_language'));
        
        // Voeg deze regel toe om de gegevensstructuur in de console te loggen
        console.log(data); // Dit toont de hele response structuur
        
        return data.data; // Zorg ervoor dat je hier de juiste data retourneert
    } catch (err) {
        console.error('Error de data wordt niet opgehaald', err);
    }
}
