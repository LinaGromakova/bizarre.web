export interface MangaResponse {
  id: string;
  type: 'manga' | string;
  attributes: MangaAttributes;
  relationships: Relationship[];
}

interface MangaAttributes {
  title: Record<string, string>;
  altTitles: Record<string, string | undefined>[];
  description: Record<string, string>;
  isLocked: boolean;
  links: Record<string, string> | null;
  officialLinks: null;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string;
  updatedAt: string;
  version: number;
  availableTranslatedLanguages: string[];
}

interface Tag {
  id: string;
  type: 'tag';
  attributes: TagAttributes;
}

interface TagAttributes {
  name: Record<string, string>;
  description: Record<string, string>;
  group: 'genre' | 'format' | 'theme' | 'content' | string;
  version: number;
}

interface Relationship {
  id: string;
  type: 'cover_art' | 'author' | 'artist' | string;
  attributes?: {
    fileName?: string;
    [key: string]: string | undefined;
  };
}
