export type Lang = "en" | "mk" | "sq";

export type Dict = {
  // Global/nav
  backHome: string;
  backToList: string;
  exploreBrands: string;
  allBrands: string;

  // Hero / copy
  playLikeA: string;
  rock: string;
  star: string;
  legacyBlurb: string; // plain text (no params)
  legacyBrandBlurb: string; // uses {brand}

  // Sections / headings
  featuring: string;
  bestBrands: string;
  chooseBrandExplore: string;
  checkOutThe: string;
  selection: string;
  featured: string;

  // Filters / controls
  filterByType: string;
  searchByName: string;
  loadMore: string;
  showingResults: string; // uses {a} and {b}

  // Errors / actions
  failedLoadBrands: string;
  failedLoadModels: string;
  failedLoadDetails: string;
  retry: string;
  showTwoMore: string;

  // Details tabs
  specification: string;
  whoPlaysIt: string;

  // Why and Download section
  whyTry: string;
  smoothBrowsing: string;
  easyDelivery: string;
  swiftPayments: string;
  browseAndBuy: string;
  favoriteGuitars: string;

  // Type labels
  typeAll: string;
  typeElectric: string;
  typeAcoustic: string;
  typeBass: string;
  typeClassical: string;
};

export const dictionaries: Record<Lang, Dict> = {
  en: {
    // Global/nav
    backHome: "Back To Home",
    backToList: "Back To List",
    exploreBrands: "Explore Brands",
    allBrands: "All brands",

    // Hero / copy
    playLikeA: "Play like a",
    rock: "Rock",
    star: "star",
    legacyBlurb:
      "With a legacy dating back decades, we blend expert craftsmanship with innovation.",
    legacyBrandBlurb:
      "With a legacy dating back to the 1950s, {brand} blends expert craftsmanship with innovation to elevate your performance.",

    // Sections / headings
    featuring: "Featuring the",
    bestBrands: "Best Brands",
    chooseBrandExplore:
      "Select your preferred brand and explore our exquisite collection.",
    checkOutThe: "Check out the",
    selection: "Selection",
    featured: "Featured",

    // Filters / controls
    filterByType: "Filter by type",
    searchByName: "Search by name",
    loadMore: "Load more",
    showingResults: "Showing {a} results from {b}",

    // Errors / actions
    failedLoadBrands: "Failed to load brands.",
    failedLoadModels: "Failed to load models.",
    failedLoadDetails: "Failed to load model details.",
    retry: "Retry",
    showTwoMore: "Show 2 more",

    // Details tabs
    specification: "Specification",
    whoPlaysIt: "Who plays it?",

    // Why & Download
    whyTry: "Why try",
    smoothBrowsing: "SMOOTH BROWSING",
    easyDelivery: "EASY DELIVERY",
    swiftPayments: "SWIFT PAYMENTS",
    browseAndBuy: "Browse and buy your",
    favoriteGuitars: "favorite guitars",

    // Type labels
    typeAll: "All",
    typeElectric: "Electric",
    typeAcoustic: "Acoustic",
    typeBass: "Bass",
    typeClassical: "Classical",
  },

  mk: {
    // Global/nav
    backHome: "Назад кон почетна",
    backToList: "Назад кон листа",
    exploreBrands: "Истражи брендови",
    allBrands: "Сите брендови",

    // Hero / copy
    playLikeA: "Свири како",
    rock: "Рок",
    star: "ѕвезда",
    legacyBlurb:
      "Со наследство што датира со децении, комбинираме врвна изработка со иновации.",
    legacyBrandBlurb:
      "Со наследство од 1950-тите, {brand} комбинира експертска изработка и иновации за да ја подигне твојата изведба.",

    // Sections / headings
    featuring: "Претставување на",
    bestBrands: "Најдобрите брендови",
    chooseBrandExplore:
      "Изберете го омилениот бренд и истражете ја нашата ексклузивна колекција.",
    checkOutThe: "Погледнете го",
    selection: "Изборот",
    featured: "Избрано",

    // Filters / controls
    filterByType: "Филтрирај по тип",
    searchByName: "Пребарај по име",
    loadMore: "Вчитај повеќе",
    showingResults: "Прикажани {a} резултати од {b}",

    // Errors / actions
    failedLoadBrands: "Не успеа вчитување на брендови.",
    failedLoadModels: "Не успеа вчитување на модели.",
    failedLoadDetails:
      "Не успеа вчитување на деталите за моделот.",
    retry: "Обиди се повторно",
    showTwoMore: "Прикажи уште 2",

    // Details tabs
    specification: "Спецификација",
    whoPlaysIt: "Кој ја свири?",

    // Why & Download
    whyTry: "Зошто да пробате",
    smoothBrowsing: "МАЗНО ПРЕЛИСТУВАЊЕ",
    easyDelivery: "ЛЕСНА ДОСТАВА",
    swiftPayments: "БРЗИ ПЛАЌАЊА",
    browseAndBuy: "Прелистувај и купувај ги",
    favoriteGuitars: "омилените гитари",

    // Type labels
    typeAll: "Сите",
    typeElectric: "Електрични",
    typeAcoustic: "Акустични",
    typeBass: "Бас",
    typeClassical: "Класични",
  },

  sq: {
    // Global/nav
    backHome: "Kthehu në shtëpi",
    backToList: "Kthehu te lista",
    exploreBrands: "Shfleto markat",
    allBrands: "Të gjitha markat",

    // Hero / copy
    playLikeA: "Luaj si",
    rock: "Rock",
    star: "yll",
    legacyBlurb:
      "Me një trashëgimi shumëvjeçare, ndërthurim mjeshtëri të lartë me inovacion.",
    legacyBrandBlurb:
      "Me një trashëgimi që nga vitet 1950, {brand} ndërthur mjeshtërinë dhe inovacionin për të ngritur performancën tënde.",

    // Sections / headings
    featuring: "Duke shfaqur",
    bestBrands: "Markat më të mira",
    chooseBrandExplore:
      "Zgjidhni markën tuaj të preferuar dhe eksploroni koleksionin tonë ekskluziv.",
    checkOutThe: "Shikoni",
    selection: "Përzgjedhjen",
    featured: "Të veçanta",

    // Filters / controls
    filterByType: "Filtro sipas llojit",
    searchByName: "Kërko sipas emrit",
    loadMore: "Shfaq më shumë",
    showingResults: "Duke shfaqur {a} rezultate nga {b}",

    // Errors / actions
    failedLoadBrands: "Dështoi ngarkimi i markave.",
    failedLoadModels: "Dështoi ngarkimi i modeleve.",
    failedLoadDetails:
      "Dështoi ngarkimi i detajeve të modelit.",
    retry: "Provo sërish",
    showTwoMore: "Shfaq edhe 2",

    // Details tabs
    specification: "Specifikimet",
    whoPlaysIt: "Kush e luan?",

    // Why & Download
    whyTry: "Pse të provoni",
    smoothBrowsing: "SHFLETIM I LEHTË",
    easyDelivery: "DËRGESË E LEHTË",
    swiftPayments: "PAGESA TË SHPEJTA",
    browseAndBuy: "Shfleto dhe bli",
    favoriteGuitars: "kitarat e preferuara",

    // Type labels
    typeAll: "Të gjitha",
    typeElectric: "Elektrike",
    typeAcoustic: "Akustike",
    typeBass: "Bas",
    typeClassical: "Klasike",
  },
};
