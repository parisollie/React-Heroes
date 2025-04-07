import { heroes } from '../data/heroes';

//Pasp 1.15
export const getHeroesByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

}