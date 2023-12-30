export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const CAROUSEL_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const FETCH_MENU_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.617614174660254&lng=85.10844469070436&catalog_qa=undefined&submitAction=ENTER&restaurantId="
  );

export const FETCH_RESTAURANT_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.617614174660254&lng=85.10844469070436&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

export const FETCH_RES_COL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.617614174660254&lng=85.10844469070436&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  ) +
  "&collection=";

export const FETCH_FOODTYPE_RES_COL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.617614174660254&lng=85.10844469070436&tags=layout_BAU_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  ) +
  "&collection=";

export const PRE_SEARCH_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=25.617614174660254&lng=85.10844469070436"
  );
export const SEARCH_RESULT =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=25.617614174660254&lng=85.10844469070436&trackingId=undefined" +
      "&str="
  );
export const SEARCH_RES_LIST =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.617614174660254&lng=85.10844469070436&trackingId=d8cf29b5-7f01-4147-9ef6-52676c59e7e3&submitAction=ENTER&queryUniqueId=591c7915-88e8-7e94-34b6-e8a3203304d4" +
      "&str="
  );
export const SEARCH_RES_SEARCH_LIST =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.617614174660254&lng=85.10844469070436&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=6183face-817d-b9a1-3878-b0cab666c56a&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A21809%2C%22primaryRestaurantId%22%3A373155%2C%22cloudinaryId%22%3A%22af33b81798b11deba338e94b7585d348%22%2C%22brandId%22%3A21809%2C%22dishFamilyId%22%3A%22846516%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D" +
      "&str="
  );

export const restaurantList = [
  {
    info: {
      id: "654087",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "SP Verma Road",
      areaName: "Lodipur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "654087",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "166",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹159",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-sp-verma-road-lodipur-patna-654087",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "449025",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Patna Sadar",
      areaName: "Sri Krishnapuri",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "449025",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "721",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-sadar-sri-krishnapuri-patna-449025",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "254135",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Gandhi Maidan",
      areaName: "Golambar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "254135",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "630",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-gandhi-maidan-golambar-patna-254135",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "441343",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "rfgsm05nlfo6rpclhpyn",
      locality: "Paras Lok Complex",
      areaName: "Sri Krishnapuri",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "441343",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "4961",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 01:05:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-paras-lok-complex-sri-krishnapuri-patna-441343",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "422805",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Radhey Shree Road",
      areaName: "Patliputra Colony",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "422805",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2600,
      },
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-radhey-shree-road-patliputra-colony-patna-422805",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "698243",
      name: "Domino's Pizza",
      cloudinaryImageId: "0e7bc46a0e74d28b0d88e1fad2830dbc",
      locality: "Rajapur",
      areaName: "Inderpuri",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "698243",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "2456",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 22:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-rajapur-inderpuri-patna-698243",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "107872",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "One Mall",
      areaName: "Srikrishnapuri",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "107872",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "5588",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:50:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-one-mall-srikrishnapuri-patna-107872",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "308385",
      name: "0612 ROAD CHEF ( Open Air )",
      cloudinaryImageId: "a6kxfsntpbcygshv5sgp",
      locality: "Boring Canal Road",
      areaName: "Kidwaipuri",
      costForTwo: "₹450 for two",
      cuisines: ["Indian", "Chinese", "Tandoor", "Biryani"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "308385",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "22680",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/0612-road-chef-open-air-boring-canal-road-kidwaipuri-patna-308385",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "677700",
      name: "NIC Ice Creams",
      cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
      locality: "AG COLONY PO",
      areaName: "ASHIYANA NAGAR",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "677700",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "6249",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8d7f3221-f576-4249-9cf9-3354a4ff14d6",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-ag-colony-po-ashiyana-nagar-patna-677700",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "679788",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
      locality: "S.K.Puri",
      areaName: "Sahdeo Mahto Marg",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "679788",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-s-k-puri-sahdeo-mahto-marg-patna-679788",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492412",
      name: "Behrouz Biryani",
      cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
      locality: "Patna Sadar",
      areaName: "Boring Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "492412",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "1803",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-sadar-boring-road-patna-492412",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "745653",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "17cff8be2c18a6acea5deede2b2f90a6",
      locality: "Lohia Nagar",
      areaName: "Kankarbagh",
      costForTwo: "₹500 for two",
      cuisines: ["American", "Desserts"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "745653",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "375065",
      avgRatingString: "3.8",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:01:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-lohia-nagar-kankarbagh-patna-745653",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492419",
      name: "The Good Bowl",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Patna Sadar",
      areaName: "Boring Road",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "492419",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "7918",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-sadar-boring-road-patna-492419",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "646961",
      name: "Wow! Momo",
      cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
      locality: "Chauraha",
      areaName: "Boring Canal Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "646961",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "1776",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:58:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-chauraha-boring-canal-road-patna-646961",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492417",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "nylazndpe3lzotwjoahx",
      locality: "Patna Sadar",
      areaName: "Boring Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "492417",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "4925",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sadar-boring-road-patna-492417",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "492413",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Patna Sadar",
      areaName: "Boring Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "492413",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "21809",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-sadar-boring-road-patna-492413",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "126292",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "wbdvil5g2dvy1logvqrg",
      locality: "Patna One Mall",
      areaName: "Fraser Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "126292",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "10804",
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-07 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        badgeType: "BADGE_TYPE_OFFER_PACK",
        offerSubText: "with offer pack",
        nonSwiggyOneFreedelMessage: "FREE DELIVERY",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-c8e00ec0-84a9-4fe3-b00a-3852019d3b86",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-one-mall-fraser-road-patna-126292",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

export const updatedRestaurant = [
  {
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "62647",
                      name: "Pizza Hut",
                      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      locality: "MG Road",
                      areaName: "MG Road",
                      costForTwo: "₹500 for two",
                      cuisines: ["Pizzas"],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "62647",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 3900,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3900,
                      },
                      parentId: "721",
                      avgRatingString: "3.8",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/pizza-hut-mg-road-bangalore-62647",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "121603",
                      name: "Kannur Food Point",
                      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
                      locality: "SG Palya",
                      areaName: "Tavarekere",
                      costForTwo: "₹300 for two",
                      cuisines: ["Kerala", "Chinese"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "121603",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 5700,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5700,
                      },
                      parentId: "20974",
                      avgRatingString: "3.9",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "30 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 02:50:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kannur-food-point-sg-palya-tavarekere-bangalore-121603",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "40493",
                      name: "Zaitoon",
                      cloudinaryImageId: "ubpnfgqiek5bd82owz8b",
                      locality: "Kodihalli",
                      areaName: "Indiranagar",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Arabian",
                        "Biryani",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "Juices",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "40493",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 5700,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5700,
                      },
                      parentId: "4555",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "35 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/zaitoon-kodihalli-indiranagar-bangalore-40493",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "464509",
                      name: "Leon's - Burgers & Wings (Leon Grill)",
                      cloudinaryImageId: "qol6dzbjxyse0tylbznu",
                      locality: "Pulkeshi Nagar",
                      areaName: "Frazer Town",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental",
                      ],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "464509",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4700,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4700,
                      },
                      parentId: "371281",
                      avgRatingString: "4.3",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "4.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-pulkeshi-nagar-frazer-town-bangalore-464509",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "30034",
                      name: "Mani's Dum Biryani",
                      cloudinaryImageId: "y0fjz8h4ad8nfzkmbznu",
                      locality: "Haudin Road",
                      areaName: "Ulsoor",
                      costForTwo: "₹499 for two",
                      cuisines: ["Andhra", "Biryani", "North Indian"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "30034",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4200,
                      },
                      parentId: "623",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/manis-dum-biryani-haudin-road-ulsoor-bangalore-30034",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "5247",
                      name: "Corner House Ice Cream",
                      cloudinaryImageId: "o2rwujynxk8vhkbtdtvb",
                      locality: "Residency Road",
                      areaName: "Ashok Nagar",
                      costForTwo: "₹250 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.7,
                      feeDetails: {
                        restaurantId: "5247",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 3200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3200,
                      },
                      parentId: "65254",
                      avgRatingString: "4.7",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 17,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "17 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "D",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/corner-house-ice-cream-residency-road-ashok-nagar-bangalore-5247",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "3369",
                      name: "Truffles",
                      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
                      locality: "St. Marks Road",
                      areaName: "St. Marks Road",
                      costForTwo: "₹450 for two",
                      cuisines: [
                        "American",
                        "Desserts",
                        "Continental",
                        "Italian",
                      ],
                      avgRating: 4.5,
                      feeDetails: {
                        restaurantId: "3369",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 3200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3200,
                      },
                      parentId: "218065",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.2,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "1.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "48230",
                      name: "Kanti Sweets",
                      cloudinaryImageId: "u0hhfifwmpsnobytv2yf",
                      locality: "Brigade Road",
                      areaName: "Brigade Road",
                      costForTwo: "₹150 for two",
                      cuisines: ["Sweets"],
                      avgRating: 4.5,
                      veg: true,
                      feeDetails: {
                        restaurantId: "48230",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 3900,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3900,
                      },
                      parentId: "4700",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 0.3,
                        serviceability: "SERVICEABLE",
                        slaString: "15 mins",
                        lastMileTravelString: "0.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 22:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-bangalore-48230",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "728928",
                      name: "Veer Ji Malai Chaap Wale",
                      cloudinaryImageId: "e0c349e85d72d390e8013fbdd06a1903",
                      locality: "Khb Colony",
                      areaName: "Koramangala",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "North Indian",
                        "Tandoor",
                        "Snacks",
                        "Beverages",
                      ],
                      avgRating: 3.8,
                      veg: true,
                      feeDetails: {
                        restaurantId: "728928",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 5700,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5700,
                      },
                      parentId: "12056",
                      avgRatingString: "3.8",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                            description: "pureveg",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "pureveg",
                                  imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹150 OFF",
                        subHeader: "ABOVE ₹349",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/veer-ji-malai-chaap-wale-khb-colony-koramangala-bangalore-728928",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "392828",
                      name: "Big Bowl",
                      cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
                      locality: "Chikka Lakshmaiah Layout",
                      areaName: "Adugodi",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "North Indian",
                        "Chinese",
                        "Tibetan",
                        "Desserts",
                      ],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "392828",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4200,
                      },
                      parentId: "434792",
                      avgRatingString: "3.8",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 4.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "4.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 02:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "302699",
                      name: "Barbeque Nation",
                      cloudinaryImageId: "qzqeafcmayvxggjgj7rf",
                      locality: "Ulsoor",
                      areaName: "Ulsoor",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "North Indian",
                        "Barbecue",
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Desserts",
                      ],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "302699",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4900,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4900,
                      },
                      parentId: "2438",
                      avgRatingString: "4.0",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/barbeque-nation-ulsoor-bangalore-302699",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "63048",
                      name: "Sharief Bhai",
                      cloudinaryImageId: "eahrfj70zhzy621zi8yq",
                      locality: "Frazer Town",
                      areaName: "Frazer Town",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Biryani",
                        "Mughlai",
                        "Arabian",
                        "Kebabs",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "63048",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4700,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4700,
                      },
                      parentId: "5734",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 3.8,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "3.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/sharief-bhai-frazer-town-bangalore-63048",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "622192",
                      name: "MOJO Pizza - 2X Toppings",
                      cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
                      locality: "Halasuru",
                      areaName: "Indiranagar",
                      costForTwo: "₹250 for two",
                      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "622192",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4200,
                      },
                      parentId: "11329",
                      avgRatingString: "4.4",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "20-30 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-halasuru-indiranagar-bangalore-622192",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "487230",
                      name: "NH1 Bowls - Highway To North",
                      cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
                      locality: "Jogupalya Road",
                      areaName: "Halasuru",
                      costForTwo: "₹250 for two",
                      cuisines: ["North Indian", "Punjabi", "Home Food"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "487230",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4200,
                      },
                      parentId: "22452",
                      avgRatingString: "4.4",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "16-26 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-02 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-jogupalya-road-halasuru-bangalore-487230",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "614642",
                      name: "Soul Rasa",
                      cloudinaryImageId: "v9fczzlua1wnrx63fh1g",
                      locality: "Akkithimanahalli",
                      areaName: "Shanti Nagar",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Indian",
                        "Healthy Food",
                        "Home Food",
                        "South Indian",
                        "North Indian",
                      ],
                      avgRating: 4.5,
                      feeDetails: {
                        restaurantId: "614642",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 3200,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3200,
                      },
                      parentId: "239281",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 2.8,
                        serviceability: "SERVICEABLE",
                        slaString: "29 mins",
                        lastMileTravelString: "2.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-11-01 23:30:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId:
                              "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            description: "OnlyOnSwiggy",
                          },
                        ],
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "OnlyOnSwiggy",
                                  imageId:
                                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹110",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-3687f45e-c924-462f-a799-8e97bf3cf433",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/soul-rasa-akkithimanahalli-shanti-nagar-bangalore-614642",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
    ],
  },
];
