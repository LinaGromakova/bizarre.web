import { RESERVE_MANGA } from '../data/reserveManga';
import type { ShikimoriGraphQLResponse } from '../types/apiMangaType';
import type { ShikimoriPersonResponse } from '../types/apiMangaType';

const getMangaList = async () => {
  try {
    const personResponse = await fetch('/shiki-api/people/2619', {
      headers: {
        Accept: 'application/json',
      },
    });
    if (!personResponse.ok) {
      console.error(
        'Ошибка получения данных автора. Статус:',
        personResponse.status,
      );
      return RESERVE_MANGA;
    }
    const personData: ShikimoriPersonResponse = await personResponse.json();
    const mangaIds = Array.from(
      new Set(
        (personData.works || [])
          .filter((work) => work.manga?.id)
          .map((work) => work.manga!.id),
      ),
    );

    if (mangaIds.length === 0) return [];
    const query = `
      query {
        mangas(ids: "${mangaIds.join(',')}", limit: 50) {
          id
          name
          russian
          description
          airedOn {
            year
          }
          genres {
            russian
            name
          }
          poster {
            originalUrl
          }
        }
      }
    `;
    const gqlResponse = await fetch('/shiki-api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    if (!gqlResponse.ok) {
      console.error('Ошибка GraphQL сервера. Статус:', gqlResponse.status);
      return RESERVE_MANGA;
    }
    const result: ShikimoriGraphQLResponse = await gqlResponse.json();
    if (result.errors) {
      console.error('Ошибка GraphQL:', result.errors);
      return RESERVE_MANGA;
    }
    const mangas = result.data?.mangas || [];
    return mangas.map((el) => {
      const cleanDescription = el.description
        ? el.description.replace(/\[.*?\]/g, '')
        : '';
      return {
        mangaId: el.id,
        title: el.russian || el.name,
        description: cleanDescription,
        releaseYear: el.airedOn?.year,
        genres: el.genres.map((g) => g.russian || g.name),
        coverImage: el.poster?.originalUrl || '',
      };
    });
  } catch (error: unknown) {
    console.error('Error fetch:', error);
    return RESERVE_MANGA;
  }
};

export default getMangaList;
