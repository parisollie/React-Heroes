import { heroes } from '../data/heroes';

//Paso 1.14
export const getHeroesByPublisher = (publisher) => {

    //Paso 1.15, le mandare error cualquier cosa que no este aqui
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}
