import { Character, CharactersResponse } from './models';

const baseUrl = 'https://swapi.dev/api/';

export const charactersAPI = {
  getCharacters: async (name: string): Promise<Character[]> => {
    const response = await fetch(`${baseUrl}people/?search=${name.trim()}`);
    if (response.ok !== true) throw new Error('Сharacters request error');
    const data: CharactersResponse = await response.json();
    return data.results;
  },
};
