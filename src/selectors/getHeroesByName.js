import { heroes } from '../data/heroes';

//Pasp 1.15, descartarlo
//Paso 4.26
export const getHeroesByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

}