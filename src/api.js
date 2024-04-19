const SWAPI_BASE_URL = 'https://swapi.dev/api';

export async function getAllCharacters(page = 1) {
    const url = `${SWAPI_BASE_URL}/people/?page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Erro ao buscar personagem.');
    }
    const data = await response.json();
    return data.results;
}

export async function getPeopleCount() {
    const url = `${SWAPI_BASE_URL}/people`;
    const response = await fetch(url);
    const data = await response.json();
    return data.count;
  }