import {
  customerWade,
  customerJane,
  customerRobert,
  customerBrooklyn,
  award01,
  award02,
  award03,
  award05,
  blog01,
  blog02,
  blog03,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  beer,
  wine,
  cocktail,
  chefAren,
  chefJack,
  chefJavier,
  chefKevin,
  chefPatrick,
  chefStacy,
  blog01_tip01Vid,
  blog01_tip02Img,
  comment01Auth,
  comment02Auth,
  comment03Auth,
} from "../assets";
export const wineAndBeer = [
  {
    id: "d01",
    title: "Chapel Hill Shiraz",
    price: "$56",
    ingredients: ["AU", "Bottle"],
  },
  {
    id: "d02",
    title: "Catena Malbec",
    price: "$59",
    ingredients: ["AR", "Bottle"],
  },
  {
    id: "d03",
    title: "La Vieille Rosé",
    price: "$44",
    ingredients: ["FR", "750ml"],
  },
  {
    id: "d04",
    title: "Rhino Pale Ale",
    price: "$31",
    ingredients: ["CA", "750ml"],
  },
  {
    id: "d05",
    title: "Irish Guinness",
    price: "$26",
    ingredients: ["IE", "750ml"],
  },
];
export const cocktails = [
  {
    id: "c01",
    title: "Aperol Spritz",
    price: "$20",
    ingredients: [
      "Aperol",
      "Aperol",
      "Villa",
      "Marchesi",
      "prosecco",
      "soda",
      "30ml",
    ],
  },
  {
    id: "c02",
    title: "Dark 'N' Stormy",
    price: "$16",
    ingredients: ["Dark rum", "Ginger beer", "Slice of lime"],
  },
  {
    id: "c03",
    title: "Daiquiri",
    price: "$10",
    ingredients: ["Rum", "Citrus juice", "Sugar"],
  },
  {
    id: "c04",
    title: "Old Fashioned",
    price: "$31",
    ingredients: ["Bourbon", "Brown sugar", "Angostura Bitters"],
  },
  {
    id: "c05",
    title: "Negroni",
    price: "$26",
    ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
  },
];
export const customers = [
  {
    id: "c1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    author: "Wade Warren",
    title: "sommelier",
    img: customerWade,
  },
  {
    id: "c2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    author: "Jane Cooper",
    title: "Chef",
    img: customerJane,
  },
  {
    id: "c3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    author: "Robert Fox",
    title: "Chef",
    img: customerRobert,
  },
  {
    id: "c4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    author: "Brooklyn Simmons",
    title: "Caterer",
    img: customerBrooklyn,
  },
];
export const laurels = [
  {
    id: "l1",
    title: "Rising Star",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award01,
  },
  {
    id: "l2",
    title: "Bib Gourmond",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award02,
  },
  {
    id: "l3",
    title: "Outstanding Chef",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award03,
  },
  {
    id: "l4",
    title: "AA Hospitality ",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award05,
  },
];
export const blogs = [
  {
    id: "b1",
    title: "tips for prepping and caring for your grill",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    img: blog01,
    author: "- Annalisa L",
    date: "16 Apr 2021",
    detailId: "blog01",
  },
  {
    id: "b2",
    title: "summer cocktails and mocktails",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    img: blog02,
    author: "-John Micheal",
    date: "23 May 2021",
    detailId: "blog02",
  },
  {
    id: "b3",
    title: "easy cooking for college students",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    img: blog03,
    author: "-Fred W",
    date: "06 Aug 2021",
    detailId: "blog03",
  },
];
export const gallery = [
  { id: "gallery1", img: gallery01 },
  { id: "gallery2", img: gallery02 },
  { id: "gallery3", img: gallery03 },
  { id: "gallery4", img: gallery04 },
];
export const contact = {
  address: "9 W 53rd St, New York, NY 10019, USA",
  tel: ["+1 212-344-1230", "+1 212-555-1230"],
};
export const workingHours = [
  { id: "wh01", period: "Monday - Friday:", hours: "08:00 am - 12:00 am" },
  { id: "wh02", period: "Saturday - Sunday:", hours: "07:00am - 11:00 pm" },
];
export const poisons = [
  { id: "beer", img: beer },
  { id: "wine", img: wine },
  { id: "cocktails", img: cocktail },
];
export const features = [
  { id: "f1", title: "Breakfast Options", value: "30+" },
  { id: "f2", title: "Dinner Options", value: "50+" },
  { id: "f3", title: "New Locations", value: "8" },
];
export const team = [
  {
    id: "c01",
    chefName: "kevin luo",
    chefTitle: "head chef",
    chefImg: chefKevin,
  },
  {
    id: "c02",
    chefName: "patrick choi",
    chefTitle: "deputy chef",
    chefImg: chefPatrick,
  },
  {
    id: "c03",
    chefName: "jack biscoff",
    chefTitle: "station chef",
    chefImg: chefJack,
  },
  {
    id: "c04",
    chefName: "stacy lee",
    chefTitle: "station chef",
    chefImg: chefStacy,
  },
  {
    id: "c05",
    chefName: "aren goodman",
    chefTitle: "junior chef",
    chefImg: chefAren,
  },
  {
    id: "c06",
    chefName: "javier dowsing",
    chefTitle: "junior chef",
    chefImg: chefJavier,
  },
];
export const achievments = [
  {
    id: "ach1",
    title: "Rising Star",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award01,
  },
  {
    id: "ach2",
    title: "Outstanding Chef",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award03,
  },
  {
    id: "ach3",
    title: "Outstanding Chef",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award03,
  },
  {
    id: "ach4",
    title: "Rising Star",
    content: "Lorem ipsum dolor sit amet, consectetur.",
    img: award01,
  },
];
export const categories = [
  {
    id: "cat01",
    title: "photography",
    value: 1,
  },
  {
    id: "cat02",
    title: "baking",
    value: 2,
  },
  {
    id: "cat03",
    title: "cooking tips",
    value: 6,
  },
];
export const tags = [
  { id: "tag01", name: "Grilling" },
  { id: "tag02", name: "Cooking" },
  { id: "tag03", name: "Baking" },
  { id: "tag04", name: "Cuisines" },
  { id: "tag05", name: "Chef" },
  { id: "tag06", name: "Alcohol Mixing" },
];
export const blogsDetails = [
  {
    id: "blog01",
    tips: [
      {
        id: "tip01",
        title: "How to prepare your grill",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.",
        media: blog01_tip01Vid,
        mediaDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.",
        tipQoute: "There is no love sincerer than the love of food.",
        steps: [
          {
            id: "step01",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          { id: "step02", text: " Tincidunt pharetra ut lobortis id." },
          {
            id: "step03",
            text: "Commodo sit libero lacus a egestas penatibus pretium quis lorem. ",
          },
        ],
      },
      {
        id: "tip02",
        title: "How to care for your grill",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem.",
        media: blog01_tip02Img,
        mediaDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.",
        tipQoute: null,
        steps: [
          {
            id: "step01",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          { id: "step02", text: " Tincidunt pharetra ut lobortis id." },
          {
            id: "step03",
            text: "Commodo sit libero lacus a egestas penatibus pretium quis lorem. ",
          },
        ],
      },
    ],
    tags: [
      {
        id: "tag01",
        text: "grilling",
      },
      {
        id: "tag02",
        text: "outdoors",
      },
      {
        id: "tag03",
        text: "cooking",
      },
    ],
  },
];
export const blogComments = [
  {
    blogId: "blog01",
    comments: [
      {
        commentId: "comment01",
        commentAuth: "Nora Martin",
        commentAuthImg: comment01Auth,
        commentDate: "01 Dec 2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt.",
        commentReplys: [],
      },
      {
        commentId: "comment02",
        commentAuth: "Lara Williams",
        commentAuthImg: comment02Auth,
        commentDate: "05 Dec 2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt.",
        commentReplys: [],
      },
      {
        commentId: "comment03",
        commentAuth: "Jane Cooper",
        commentAuthImg: comment03Auth,
        commentDate: "05 Dec 2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt.",
        commentReplys: [],
      },
    ],
  },
];
