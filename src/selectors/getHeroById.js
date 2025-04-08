import { twilightCharacters } from '../data/crepusculo';

//Paso 1.13
export const getHeroById = (id) => {
    //Paso 1.16
    return twilightCharacters.find(tw => tw.id === id);

}
