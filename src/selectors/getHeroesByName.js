import { twilightCharacters } from '../data/crepusculo';

//Pasp 1.15, descartarlo
//Paso 4.26
export const getHeroesByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return twilightCharacters.filter(tw => tw.name.toLocaleLowerCase().includes(name));

}