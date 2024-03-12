export interface IResponse {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
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

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface ExternalId {
  kpHD?: string;
  imdb?: string;
  tmdb?: number;
}

export interface Logo {
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

export interface Country {
  name: string;
}

export interface ReleaseYear {
  start: number;
  end: number;
}

export const movies = {
  docs: [
    {
      id: 431219,
      name: "Глухарь",
      alternativeName: "Глухарь",
      enName: "",
      type: "tv-series",
      year: 2008,
      description:
        "Главные герои - следователь Сергей Глухарёв и его приятель, сотрудник районного ДПС Денис Антошин - два рыцаря с массой упреков. Они - простые люди, которые живут самой обычной жизнью, с её радостями и разочарованиями; до неуязвимых супергероев им так же далеко, как до генеральских погон. У них напряженная работа, низкая зарплата и неустроенная личная жизнь, что, конечно, не прибавляет оптимизма. Но друзья не теряют присутствия духа и продолжают охранять правопорядок. Общество, которое они защищают, не всегда проявляет должное уважение к их нелегкому труду, но Глухарёв и Антошин продолжают исполнять свой долг, сохраняя чувство юмора и оставляя место для простых человеческих слабостей...",
      shortDescription: "",
      movieLength: 0,
      isSeries: true,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 2,
      status: "completed",
      names: [
        {
          name: "Глухарь",
        },
      ],
      externalId: {
        kpHD: "7cc108ae56d746729775863b54046520",
        imdb: "tt1476589",
        tmdb: 46013,
      },
      logo: {
        url: null,
        previewUrl: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1600647/41ec43cb-0e83-4ccc-8b48-400a8b9f0e21/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1600647/41ec43cb-0e83-4ccc-8b48-400a8b9f0e21/x1000",
      },
      backdrop: {
        url: "https://imagetmdb.com/t/p/original/beu4XaShGZT0uzPCuVeAClMfrg7.jpg",
        previewUrl:
          "https://imagetmdb.com/t/p/w500/beu4XaShGZT0uzPCuVeAClMfrg7.jpg",
      },
      rating: {
        kp: 7.861,
        imdb: 6.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 77758,
        imdb: 627,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      genres: [
        {
          name: "детектив",
        },
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
        {
          name: "комедия",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [
        {
          start: 2008,
          end: 2008,
        },
      ],
    },
    {
      id: 405678,
      name: "Глухарь",
      alternativeName: "",
      enName: "",
      type: "tv-series",
      year: 1994,
      description:
        "Андрей Кандов бежит из «Крестов» на волю. Кто-то помог ему. Но кто? Дело передано в КГБ и им, похоже, всерьез занялись следователи.",
      shortDescription: "",
      movieLength: 0,
      isSeries: true,
      ticketsOnSale: false,
      totalSeriesLength: 524,
      seriesLength: 26,
      ratingMpaa: null,
      ageRating: null,
      top10: null,
      top250: null,
      typeNumber: 2,
      status: "completed",
      names: [
        {
          name: "Глухарь",
        },
      ],
      externalId: {
        kpHD: null,
      },
      logo: {
        url: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/c149fb87-23f6-4f9d-8bf5-d7a903756347/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/c149fb87-23f6-4f9d-8bf5-d7a903756347/x1000",
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 6.337,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 233,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [
        {
          start: 1994,
          end: 1994,
        },
      ],
    },
    {
      id: 471027,
      name: "Глухарь. Продолжение",
      alternativeName: "",
      enName: "",
      type: "tv-series",
      year: 2009,
      description:
        "Продолжение истории о суровых буднях следователя Глухарева и его друга Антошина, бывшего работника ГАИ. Теперь Антошин бравый оперативник и работает с Глухаревым в одном РОВД. Друзьям придется вплотную расследовать уголовные дела, попадать в драматические и комические ситуации, лавировать между подводными течениями в милицейском руководстве.",
      shortDescription: "",
      movieLength: 0,
      isSeries: true,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: 44,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 2,
      status: "completed",
      names: [
        {
          name: "Глухарь. Продолжение",
        },
        {
          name: "Глухарь-2",
          language: "RU",
          type: "Alternative",
        },
      ],
      externalId: {
        imdb: "tt4217060",
        tmdb: 91528,
        kpHD: "98df45862706434b91101cbf48f37dde",
      },
      logo: {
        url: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1777765/a5cca743-f2cd-428b-a5f0-22927ed002d4/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1777765/a5cca743-f2cd-428b-a5f0-22927ed002d4/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/tmdb-images/original/9u3RyuR7aQBNV3y0wm5IkyGq02W.jpg",
        previewUrl:
          "https://image.openmoviedb.com/tmdb-images/w500/9u3RyuR7aQBNV3y0wm5IkyGq02W.jpg",
      },
      rating: {
        kp: 8.09,
        imdb: 6.9,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 14970,
        imdb: 101,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 193,
      },
      genres: [
        {
          name: "драма",
        },
        {
          name: "криминал",
        },
        {
          name: "детектив",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [
        {
          start: 2009,
          end: 2009,
        },
      ],
    },
    {
      id: 474787,
      name: "Глухарь в кино",
      alternativeName: "",
      enName: "",
      type: "movie",
      year: 2010,
      description:
        "Два друга детства работают в одном отделении милиции. Сергей Глухарев — следователь, Денис Антошин — оперативник. Вечер, который они проводят с друзьями в ресторане, преподносит им ужасный сюрприз. Случайная ссора с одним из посетителей, после которой его находят убитым, переворачивает всю жизнь Глухарева и Антошина. Друзья объявлены в розыск как опасные преступники. Теперь за ними охотятся не только бывшие коллеги, но и профессиональный наемник, работающий на семью погибшего…",
      shortDescription:
        "Друзья-милиционеры становятся подозреваемыми в убийстве. Ироничный детектив с героями популярного сериала",
      movieLength: 86,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Глухарь в кино",
        },
      ],
      externalId: {
        kpHD: "401354bff0f18a009aad81e173606c89",
        imdb: "tt1620464",
        tmdb: 69976,
      },
      logo: {
        url: null,
        previewUrl: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/31ee6340-5f2f-4303-b807-50b16ad7b9ce/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/31ee6340-5f2f-4303-b807-50b16ad7b9ce/x1000",
      },
      backdrop: {
        url: "https://imagetmdb.com/t/p/original/33sgRJTPPN5BMwg5J2ckZoYG2dt.jpg",
        previewUrl:
          "https://imagetmdb.com/t/p/w500/33sgRJTPPN5BMwg5J2ckZoYG2dt.jpg",
      },
      rating: {
        kp: 6.491,
        imdb: 5.3,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 14695,
        imdb: 214,
        filmCritics: 0,
        russianFilmCritics: 1,
        await: 3277,
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "криминал",
        },
        {
          name: "детектив",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [],
    },
    {
      id: 502845,
      name: "Глухарь. Возвращение",
      alternativeName: "",
      enName: "",
      type: "tv-series",
      year: 2010,
      description:
        "Третий сезон «Глухаря» ещё ярче и четче обрисует образы полюбившихся нам героев. Сергей Глухарев уже в звании майора занимает должность начальника следственного отдела сталкиваясь с целым рядом новых служебных проблем. Его друг Денис Антошин наоборот увязает в проблемах личных.  Как всегда они могут рассчитывать только на помощь друг друга. Мы увидим развитие отношений Сергея и его начальницы Ирины Зиминой, а также Дениса и его девушки Насти. Новые шаги сделает в своей жизни и Коля Тарасов. С неожиданной стороны раскроется начальник СКМ Стас Карпов. «Глухарь 3» - это непридуманная жизнь, такая, какой ее видит каждый из нас.",
      shortDescription: "",
      movieLength: 0,
      isSeries: true,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: 45,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 2,
      status: "completed",
      names: [
        {
          name: "Глухарь. Возвращение",
        },
      ],
      externalId: {
        kpHD: "3e2ebb22d5d04e8faa259c85904f1aa7",
      },
      logo: {
        url: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/95316121-0026-4277-b9b5-43de4c2381f2/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/95316121-0026-4277-b9b5-43de4c2381f2/x1000",
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 7.994,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 13376,
        imdb: 101,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 1472,
      },
      genres: [
        {
          name: "криминал",
        },
        {
          name: "детектив",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [
        {
          start: 2010,
          end: 2010,
        },
      ],
    },
    {
      id: 491892,
      name: "Глухарь. Приходи, Новый год!",
      alternativeName: "",
      enName: "",
      type: "movie",
      year: 2009,
      description:
        "Грядёт Новый год. Глухарев и Антошин пытаются раздобыть денег. С этой целью они фотографируют задержанного мошенника в милицейской форме и выдают его за погибшего следователя, который недавно устроился на работу в отдел. Ошарашенным сотрудникам ОВД ничего не остается делать, как сдавать деньги на похороны.... Узнав об этой хулиганской выходке своих подчиненных, Зимина в наказание оставляет друзей дежурить в новогоднюю ночь. 31 декабря юная беспризорница Вера крадет телефон у подруги Антошина Насти и требует с позвонившего Дениса деньги за аппарат. Глухарев и Антошин ловят Веру, но девочка сбегает.\n\nИ тут... совершенно неожиданно из Петербурга в Москву приезжают небезызвестные полковник Ухов и психолог Мельникова - сотрудники специального отдела по расследованию особо опасных дел со знаменитого «Литейного». Они тоже ищут Веру, которая стала свидетельницей одного загадочного преступления в Питере. Удастся ли им совместно с московскими коллегами найти девочку? В то же время Коле Тарасову приходится разбираться в непростой ситуации с восходящей звездой эстрады Алексом, которого обвиняют в плагиате - краже песни про Новый год. Докажет ли молодой певец Алекс свои авторские права на песню? И какие ещё невообразимые истории произойдут с нашими героями?",
      shortDescription: "",
      movieLength: 92,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Глухарь. Приходи, Новый год!",
        },
      ],
      externalId: {
        kpHD: null,
      },
      logo: {
        url: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1629390/9836c7f2-ef0e-4adf-a9ea-cc4ccd68d9e5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1629390/9836c7f2-ef0e-4adf-a9ea-cc4ccd68d9e5/x1000",
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 6.744,
        imdb: 5.5,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 4756,
        imdb: 39,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 2,
      },
      genres: [
        {
          name: "комедия",
        },
        {
          name: "детектив",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [],
    },
    {
      id: 574857,
      name: "Глухарь. «Снова Новый!»",
      alternativeName: "",
      enName: "",
      type: "movie",
      year: 2010,
      description:
        "«Жестоко» разыграв под Новый год сотрудника ОВД «Пятницкий» Черенкова, его коллеги хотели устроить себе веселое 31 декабря, но Черенков решил отомстить. На чистых бланках с подписью начальницы отдела Зиминой он расписал поручения для каждого «обидчика». Напарнику и другу Агапову «выпала честь» поздравить с наступающим генерала Захарова и… быть принятым ревнивым мужем за любовника жены! \n\nКоле Тарасову придется лезть на крышу и стать подозреваемым в торговле наркотиками. Денису Антошину «предписано» развлекать детей в костюме Деда Мороза, а неунывающему Глухарёву — обнаружить в себе способности к телекинезу… Но сам Новый год еще никто не отменял, и друзья встретят его по традиции искрометно!",
      shortDescription: "",
      movieLength: 96,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Глухарь. «Снова Новый!»",
        },
      ],
      externalId: {
        kpHD: null,
      },
      logo: {
        url: null,
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/7f5aa854-e8b0-4473-910e-ba602df92e21/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/7f5aa854-e8b0-4473-910e-ba602df92e21/x1000",
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 6.275,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 2977,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      genres: [
        {
          name: "комедия",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [],
    },
    {
      id: 655937,
      name: "Глухарь. «Опять Новый!»",
      alternativeName: "",
      enName: "",
      type: "movie",
      year: 2011,
      description:
        "Действие фильма начинается в «обезьяннике» районного ОВД Москвы, куда доставляют задержанного типа лет 60-ти в халате и тапочках. Этот, бомжеватого вида, персонаж утверждает, что он сам Максим Аверин, снимавшийся в сериале «Глухарь» в роли Сергея Глухарева. \n\nЧто это за старик, и найдёт ли полиция настоящего Максима Аверина? Как и зачем оказываются на театральной сцене Денис Рожков, он же Антошин, и Александр Бобров, он же Агапов?",
      shortDescription: "",
      movieLength: 87,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 16,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Глухарь. «Опять Новый!»",
        },
      ],
      externalId: {
        kpHD: null,
      },
      logo: {
        url: null,
      },
      poster: {
        url: null,
        previewUrl: null,
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 5.868,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 1754,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 18,
      },
      genres: [
        {
          name: "комедия",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [],
    },
    {
      id: 676948,
      name: "Прощай, Глухарь! Необыкновенный концерт",
      alternativeName: "",
      enName: "",
      type: "movie",
      year: 2011,
      description: "",
      shortDescription: "",
      movieLength: 54,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Прощай, Глухарь! Необыкновенный концерт",
          language: "RU",
          type: "Russian title on kinopoisk",
        },
      ],
      externalId: {
        kpHD: null,
      },
      logo: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1946459/180e71f6-e38d-4f3b-8858-c1932cd28426/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1946459/180e71f6-e38d-4f3b-8858-c1932cd28426/x1000",
      },
      backdrop: {
        url: null,
        previewUrl: null,
      },
      rating: {
        kp: 2.74,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 384,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      genres: [
        {
          name: "документальный",
        },
        {
          name: "концерт",
        },
        {
          name: "комедия",
        },
      ],
      countries: [
        {
          name: "Россия",
        },
      ],
      releaseYears: [],
    },
    {
      id: 104917,
      name: "Дон. Главарь мафии",
      alternativeName: "Don",
      enName: "",
      type: "movie",
      year: 2006,
      description:
        "Дон – главарь мафии, группы, которая занимается торговлей наркотиков. За ним охотится вся полиция Индии. Однажды в схватке с полицией Дон получает тяжелые ранения и заходят слухи, что Дон был убит. Однако, чтобы поймать всех остальных членов банды, инспектор Дсилва уговаривает простого человека Виджая, который как две капли воды похож на Дона, занять его место. И замена происходит незамеченной. Но Дсилва убит. И теперь Виджай может надеяться только на свои силы, чтобы выбраться из банды, поскольку Дсилва был единственным человеком, который знал об этом подлоге.",
      shortDescription: "",
      movieLength: 178,
      isSeries: false,
      ticketsOnSale: false,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 12,
      top10: null,
      top250: null,
      typeNumber: 1,
      status: null,
      names: [
        {
          name: "Дон. Главарь мафии",
        },
        {
          name: "Don",
        },
        {
          name: "Don The Chase Begins Again",
          language: "US",
          type: "no semi-colon for DLNA",
        },
        {
          name: "追踪再现",
          language: "CN",
          type: null,
        },
        {
          name: "夺面煞星宝莱坞",
          language: "CN",
          type: null,
        },
        {
          name: "Don (2006)",
          language: "GB",
          type: null,
        },
        {
          name: "Don 2006",
          language: "GB",
          type: null,
        },
        {
          name: "Don the chase",
          language: "GB",
          type: null,
        },
        {
          name: "DON（ドン） 過去を消された男",
          language: "JP",
          type: null,
        },
        {
          name: "DON ドン 過去を消された男",
          language: "JP",
          type: null,
        },
      ],
      externalId: {
        imdb: "tt0461936",
        tmdb: 17501,
      },
      logo: {
        url: "https://imagetmdb.com/t/p/original/z93qEId2ofUrD1CXBPPAxUmWjao.png",
      },
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/1599028/c1af06d0-e94c-49b5-86ad-00ddc033cdef/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/1599028/c1af06d0-e94c-49b5-86ad-00ddc033cdef/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/tmdb-images/original/edCPKBBiWwiLnvMyDwpDeEHL0Oz.jpg",
        previewUrl:
          "https://image.openmoviedb.com/tmdb-images/w500/edCPKBBiWwiLnvMyDwpDeEHL0Oz.jpg",
      },
      rating: {
        kp: 8.06,
        imdb: 7.1,
        filmCritics: 8.1,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 4655,
        imdb: 40722,
        filmCritics: 724,
        russianFilmCritics: 0,
        await: 0,
      },
      genres: [
        {
          name: "боевик",
        },
        {
          name: "триллер",
        },
        {
          name: "криминал",
        },
      ],
      countries: [
        {
          name: "Индия",
        },
      ],
      releaseYears: [],
    },
  ],
};
