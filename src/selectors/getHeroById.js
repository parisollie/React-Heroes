import { heroes } from '../data/heroes';

//Paso 1.13
export const getHeroById = (id) => {
    //Paso 1.16
    return heroes.find(hero => hero.id === id);

}
