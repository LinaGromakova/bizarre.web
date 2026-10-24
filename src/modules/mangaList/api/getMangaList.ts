import type { MangaResponse } from '../types/apiMangaType';

const getMangaList = async () => {
  try {
    const response = await fetch(
      'https://api.mangadex.org/manga?limit=50&offset=0&includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&authorOrArtist=03e4afc4-cd94-45a0-bb36-dfd34fa370b3',
    );
    if (!response.ok) {
      console.error('Ошибка сервера. Статус:', response.status);
      return 'Error fetch';
    }
    const result = await response.json();
    return result.data.map((el: MangaResponse) => {
      let ruTitle = null;
      if (el.attributes && el.attributes.altTitles) {
        const ruObjects = el.attributes.altTitles.filter((t) => t.ru);

        for (const obj of ruObjects) {
          if (obj.ru) {
            if (/[а-яёА-ЯЁ]/.test(obj.ru)) {
              ruTitle = obj.ru;
              break;
            }
          }
        }
        if (!ruTitle) {
          const enObj = el.attributes.altTitles.find((t) => t.en);
          if (enObj) ruTitle = enObj.en;
        }
      }
      if (!ruTitle && el.attributes?.title) {
        ruTitle =
          el.attributes.title.en ||
          el.attributes.title['ja-ro'] ||
          Object.values(el.attributes.title)[0];
      }
      const genres =
        el.attributes?.tags
          ?.filter(
            (tag: { attributes?: { group?: string } }) =>
              tag.attributes?.group === 'genre',
          )
          ?.map(
            (tag: { attributes?: { name?: { en?: string } } }) =>
              tag.attributes?.name?.en,
          )
          ?.filter((name) => Boolean(name)) || [];
      const coverRel = el.relationships?.find(
        (rel: { type: string }) => rel.type === 'cover_art',
      );
      const coverFileName = coverRel?.attributes?.fileName;
      return {
        mangaId: el.id,
        title: ruTitle,
        description: el.attributes?.description?.en || '',
        releaseYear: el.attributes?.year || null,
        genres: genres,
        coverImage: `https://mangadex.org/covers/${el.id}/${coverFileName}`,
      };
    });
  } catch (error: unknown) {
    return `Error fetch, ${error}`;
  }
};
export default getMangaList;
