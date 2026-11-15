export interface ShikimoriManga {
  id: string;
  name: string;
  russian: string | null;
  description: string | null;
  airedOn: {
    year: number;
  };
  genres: Array<{
    russian: string;
    name: string;
  }>;
  poster: {
    originalUrl: string;
  } | null;
}
export interface ShikimoriPersonResponse {
  works?: Array<{
    manga?: {
      id: number;
    } | null;
  }>;
}

export interface ShikimoriGraphQLResponse {
  data?: {
    mangas?: ShikimoriManga[];
  };
  errors?: Array<{ message: string }>;
}
