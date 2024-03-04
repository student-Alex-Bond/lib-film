export interface IResponseMovie {
    fees: Fees
    id: number
    type: string
    externalId: ExternalId
    name: string
    rating: Rating
    description: string
    votes: Votes
    distributors: Distributors
    premiere: Premiere
    slogan: string
    year: number
    poster: Poster
    facts: Fact[]
    genres: Genre[]
    countries: Country[]
    seasonsInfo: any[]
    persons: Person[]
    images: Images
    lists: string[]
    spokenLanguages: SpokenLanguage[]
    productionCompanies: ProductionCompany[]
    typeNumber: number
    alternativeName: any
    backdrop: Backdrop
    budget: Budget
    enName: any
    movieLength: number
    names: Name[]
    networks: any
    status: any
    subType: any
    ageRating: number
    ratingMpaa: any
    updatedAt: string
    similarMovies: SimilarMovy[]
    sequelsAndPrequels: any[]
    imagesInfo: ImagesInfo
    shortDescription: string
    technology: Technology
    ticketsOnSale: boolean
    logo: Logo
    watchability: Watchability
    top10: any
    top250: any
    audience: Audience[]
    deletedAt: any
    isSeries: boolean
    seriesLength: any
    totalSeriesLength: any
    videos: Videos
  }
  
  export interface Fees {
    world: World
    russia: Russia
  }
  
  export interface World {
    value: number
    currency: string
  }
  
  export interface Russia {
    value: number
    currency: string
  }
  
  export interface ExternalId {
    imdb: string
    tmdb: number
    kpHD: string
  }
  
  export interface Rating {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: any
  }
  
  export interface Votes {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: number
  }
  
  export interface Distributors {
    distributor: string
    distributorRelease: any
  }
  
  export interface Premiere {
    world: string
    russia: string
  }
  
  export interface Poster {
    url: string
    previewUrl: string
  }
  
  export interface Fact {
    value: string
    type: string
    spoiler: boolean
  }
  
  export interface Genre {
    name: string
  }
  
  export interface Country {
    name: string
  }
  
  export interface Person {
    id: number
    photo: string
    name: string
    enName?: string
    description?: string
    profession: string
    enProfession: string
  }
  
  export interface Images {
    framesCount: number
  }
  
  export interface SpokenLanguage {
    name: string
    nameEn: string
  }
  
  export interface ProductionCompany {
    name: string
    url: string
    previewUrl: string
  }
  
  export interface Backdrop {
    url: string
    previewUrl: string
  }
  
  export interface Budget {}
  
  export interface Name {
    name: string
    language?: string
    type: any
  }
  
  export interface SimilarMovy {
    id: number
    name: string
    enName: any
    alternativeName?: string
    type: string
    poster: Poster2
    year: number
    rating: Rating2
  }
  
  export interface Poster2 {
    url: string
    previewUrl: string
  }
  
  export interface Rating2 {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: any
  }
  
  export interface ImagesInfo {
    framesCount: number
  }
  
  export interface Technology {
    hasImax: boolean
    has3D: boolean
  }
  
  export interface Logo {
    url: any
  }
  
  export interface Watchability {
    items: Item[]
  }
  
  export interface Item {
    name: string
    logo: Logo2
    url: string
  }
  
  export interface Logo2 {
    url: string
  }
  
  export interface Audience {
    count: number
    country: string
  }
  
  export interface Videos {
    trailers: any[]
  }
  