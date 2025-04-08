import { twilightCharacters } from '../data/crepusculo';

//Paso 1.14
export const getHeroesByPublisher = (publisher) => {

    //Paso 1.15, le mandare error cualquier cosa que no este aqui
    const validPublishers = ['Antagonists', 'Protagonists'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return twilightCharacters.filter(tw => tw.publisher === publisher);

}
