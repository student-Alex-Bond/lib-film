export type ResponseMoviesType = {
    docs: MovieType[];
    total: number;
    limit: number;
    page: number;
    pages: number;
  }
  
  export type MovieType =  {
    id: number;
    name: string;
    alternativeName: string;
    enName: string;
    type: string;
    year: number;
    description: string;
    shortDescription: string;
    movieLength: number;
    isSeries: boolean;
    ticketsOnSale: boolean;
    totalSeriesLength?: number;
    seriesLength?: number;
    ratingMpaa: any;
    ageRating?: number;
    top10: any;
    top250: any;
    typeNumber: number;
    status?: string;
    names: Name[];
    externalId: ExternalId;
    logo?: Logo;
    poster: Poster;
    backdrop: Backdrop;
    rating: Rating;
    votes: Votes;
    genres: Genre[];
    countries: Country[];
    releaseYears: ReleaseYear[];
  }
  
  export type Name =  {
    name: string;
    language?: string;
    type?: string;
  }
  
  export type ExternalId =  {
    kpHD?: string;
    imdb?: string;
    tmdb?: number;
  }
  
  export type Logo = {
    url?: string;
    previewUrl: any;
  }
  
  export interface Poster {
    url?: string;
    previewUrl?: string;
  }
  
  export interface Backdrop {
    url?: string;
    previewUrl?: string;
  }
  
  export interface Rating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: any;
  }
  
  export interface Votes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  }
  
  export interface Genre {
    name: string;
  }
  
  export type Country = {
    name: string;
  }
  
  export type ReleaseYear =  {
    start: number;
    end: number;
  }
  
  