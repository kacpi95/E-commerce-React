import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BRANDS = [
  'Clothiq Studio',
  'Urban Line',
  'Nordwear',
  'Modern Fit',
  'Core Essentials',
  'Street Atelier',
];

const PRODUCT_NAMES = {
  koszulki: [
    'T-shirt bawełniany Premium',
    'T-shirt Oversize Essential',
    'T-shirt Classic Fit',
    'T-shirt Minimal Logo',
  ],
  swetry: [
    'Sweter miękki Premium',
    'Sweter Classic Knit',
    'Sweter Everyday Comfort',
    'Sweter z miękkiej dzianiny',
  ],
  spodnie: [
    'Jeansy Regular Fit',
    'Jeansy High Waist',
    'Spodnie dresowe Comfort',
    'Chinosy Classic Fit',
    'Legginsy Soft Move',
  ],
  eleganckie: [
    'Buty eleganckie Premium',
    'Szpilki klasyczne',
    'Botki Classic',
    'Półbuty skórzane',
  ],
  sportowe: [
    'Buty sportowe Dynamic',
    'Sneakersy Active',
    'Buty treningowe Comfort',
    'Sneakersy Sport Line',
  ],
  sneakersy: [
    'Sneakersy miejskie',
    'Sneakersy Everyday Comfort',
    'Sneakersy Low Classic',
    'Sneakersy Urban Premium',
  ],
  torby: [
    'Torba miejska Everyday',
    'Torebka Classic',
    'Plecak minimalistyczny',
    'Shopperka Premium',
  ],
  zegarki: [
    'Zegarek Classic',
    'Zegarek Minimal Silver',
    'Zegarek Modern Steel',
    'Zegarek Elegant Line',
  ],
};

function makeProduct(product, index) {
  const productName =
    PRODUCT_NAMES[product.subcategory]?.[
      index % PRODUCT_NAMES[product.subcategory].length
    ] || product.productName;

  return {
    ...product,
    productName,
    brand: BRANDS[index % BRANDS.length],
    description: `${productName} to produkt zaprojektowany z myślą o codziennym komforcie i ponadczasowym stylu. Starannie dobrane materiały oraz dopracowany krój sprawiają, że dobrze sprawdzi się w wielu stylizacjach.`,
    maintenanceInfo:
      product.category === 'obuwie'
        ? 'Czyścić miękką, lekko wilgotną ściereczką. Unikać długotrwałego kontaktu z wodą i przechowywać w suchym miejscu.'
        : product.category === 'akcesoria'
          ? 'Przechowywać w suchym miejscu. Czyścić delikatnie miękką ściereczką, bez użycia silnych detergentów.'
          : 'Prać w temperaturze do 30°C. Nie wybielać. Nie suszyć w suszarce bębnowej. Prasować w niskiej temperaturze.',
  };
}

async function main() {
  await prisma.favourite.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.product.deleteMany();

  const rawProducts = [
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/man-t-shirt-1.jpg',
        '/product-photos/man-t-shirt-2.jpg',
      ],
    },
    {
      id: 2,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['/product-photos/man-t-shirt-7.jpg'],
    },
    {
      id: 3,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-t-shirt-6.jpg',
        '/product-photos/man-t-shirt-5.jpg',
      ],
    },
    {
      id: 4,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-t-shirt-4.jpg',
        '/product-photos/man-t-shirt-3.jpg',
      ],
    },
    {
      id: 5,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        '/product-photos/man-sweater-1.jpg',
        '/product-photos/man-sweater-2.jpg',
      ],
    },
    {
      id: 6,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['/product-photos/man-sweater-3.jpg'],
    },
    {
      id: 7,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['/product-photos/man-sweater-4.jpg'],
    },
    {
      id: 8,
      gender: 'men',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-sweater-1.jpg',
        '/product-photos/man-sweater-2.jpg',
      ],
    },
    {
      id: 9,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        '/product-photos/man-trousers-1.jpg',
        '/product-photos/man-trousers-2.jpg',
      ],
    },
    {
      id: 10,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/man-trousers-3.jpg',
        '/product-photos/man-trousers-4.jpg',
      ],
    },
    {
      id: 11,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-trousers-5.jpg',
        '/product-photos/man-trousers-6.jpg',
        '/product-photos/man-trousers-7.jpg',
      ],
    },
    {
      id: 12,
      gender: 'men',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-trousers-7.jpg',
        '/product-photos/man-trousers-6.jpg',
        '/product-photos/man-trousers-5.jpg',
      ],
    },
    {
      id: 13,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        '/product-photos/man-shoes-1.jpg',
        '/product-photos/man-shoes-2.jpg',
        '/product-photos/man-shoes-3.jpg',
      ],
    },
    {
      id: 14,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/man-shoes-4.jpg',
        '/product-photos/man-shoes-5.jpg',
      ],
    },
    {
      id: 15,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-shoes-6.jpg',
        '/product-photos/man-shoes-7.jpg',
        '/product-photos/man-shoes-8.jpg',
      ],
    },
    {
      id: 16,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-shoes-3.jpg',
        '/product-photos/man-shoes-2.jpg',
        '/product-photos/man-shoes-1.jpg',
      ],
    },
    {
      id: 17,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 129,
      priceUSD: 39,
      photos: ['/product-photos/man-shoes-8.jpg'],
    },
    {
      id: 18,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/man-shoes-9.jpg',
        '/product-photos/man-shoes-10.jpg',
      ],
    },
    {
      id: 19,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-shoes-11.jpg',
        '/product-photos/man-shoes-12.jpg',
      ],
    },
    {
      id: 20,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sportowe',
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        '/product-photos/man-shoes-13.jpg',
        '/product-photos/man-shoes-14.jpg',
      ],
    },
    {
      id: 21,
      gender: 'men',
      category: 'obuwie',
      subcategory: 'sneakersy',
      pricePLN: 129,
      priceUSD: 39,
      photos: [
        '/product-photos/man-shoes-11.jpg',
        '/product-photos/man-shoes-12.jpg',
      ],
    },
    {
      id: 22,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['/product-photos/man-bag-1.jpg'],
    },
    {
      id: 23,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['/product-photos/man-bag-2.jpg'],
    },
    {
      id: 24,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 199,
      priceUSD: 49,
      photos: ['/product-photos/man-watch-1.jpg'],
    },
    {
      id: 25,
      gender: 'men',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 129,
      priceUSD: 39,
      photos: ['/product-photos/man-watch-3.jpg'],
    },

    {
      id: 26,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/women-shoes-7.jpg',
        '/product-photos/women-shoes-8.jpg',
      ],
    },
    {
      id: 27,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 149,
      priceUSD: 39,
      photos: ['/product-photos/women-shoes-4.jpg'],
    },
    {
      id: 28,
      gender: 'women',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 299,
      priceUSD: 59,
      photos: ['/product-photos/women-sweater-3.jpg'],
    },
    {
      id: 29,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-trousers-3.jpg',
        '/product-photos/women-trousers-4.jpg',
      ],
    },
    {
      id: 34,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        '/product-photos/women-shoes-1.jpg',
        '/product-photos/women-shoes-2.jpg',
        '/product-photos/women-shoes-3.jpg',
      ],
    },
    {
      id: 75,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'sportowe',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-shoes-9.jpg',
        '/product-photos/women-shoes-10.jpg',
        '/product-photos/women-shoes-11.jpg',
      ],
    },
    {
      id: 76,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'sneakersy',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-shoes-12.jpg',
        '/product-photos/women-shoes-13.jpg',
        '/product-photos/women-shoes-14.jpg',
      ],
    },
    {
      id: 77,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-bag-1.jpg',
        '/product-photos/women-bag-2.jpg',
        '/product-photos/women-bag-3.jpg',
      ],
    },
    {
      id: 78,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 299,
      priceUSD: 59,
      photos: ['/product-photos/women-bag-4.jpg'],
    },
    {
      id: 79,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-watch-1.jpg',
        '/product-photos/women-watch-2.jpg',
      ],
    },
    {
      id: 80,
      gender: 'women',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-watch-3.jpg',
        '/product-photos/women-watch-4.jpg',
      ],
    },
    {
      id: 312,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-t-shirt-4.jpg',
        '/product-photos/women-t-shirt-5.jpg',
        '/product-photos/women-t-shirt-6.jpg',
      ],
    },
    {
      id: 36,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-t-shirt-7.jpg',
        '/product-photos/women-t-shirt-8.jpg',
        '/product-photos/women-t-shirt-9.jpg',
        '/product-photos/women-t-shirt-10.jpg',
      ],
    },
    {
      id: 37,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-trousers-2.jpg',
        '/product-photos/women-trousers-1.jpg',
      ],
    },
    {
      id: 388,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-shoes-2.jpg',
        '/product-photos/women-shoes-3.jpg',
        '/product-photos/women-shoes-1.jpg',
      ],
    },
    {
      id: 39,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-t-shirt-9.jpg',
        '/product-photos/women-t-shirt-7.jpg',
        '/product-photos/women-t-shirt-8.jpg',
        '/product-photos/women-t-shirt-10.jpg',
      ],
    },
    {
      id: 40,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-trousers-3.jpg',
        '/product-photos/women-trousers-4.jpg',
      ],
    },
    {
      id: 41,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 49,
      priceUSD: 10,
      photos: ['/product-photos/women-shoes-4.jpg'],
    },
    {
      id: 42,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-shoes-8.jpg',
        '/product-photos/women-shoes-7.jpg',
      ],
    },
    {
      id: 43,
      gender: 'women',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-t-shirt-3.jpg',
        '/product-photos/women-t-shirt-1.jpg',
        '/product-photos/women-t-shirt-2.jpg',
      ],
    },
    {
      id: 44,
      gender: 'women',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-trousers-1.jpg',
        '/product-photos/women-trousers-2.jpg',
      ],
    },
    {
      id: 38,
      gender: 'women',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 149,
      priceUSD: 39,
      photos: [
        '/product-photos/women-shoes-1.jpg',
        '/product-photos/women-shoes-3.jpg',
        '/product-photos/women-shoes-2.jpg',
      ],
    },
    {
      id: 45,
      gender: 'women',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/women-sweater-1.jpg',
        '/product-photos/women-sweater-2.jpg',
      ],
    },

    {
      id: 30,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-shoes-3.jpg',
        '/product-photos/children-shoes-4.jpg',
      ],
    },
    {
      id: 31,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'sneakersy',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        '/product-photos/children-shoes-1.jpg',
        '/product-photos/children-shoes-2.jpg',
      ],
    },
    {
      id: 32,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/children-trousers-1.jpg',
        '/product-photos/children-trousers-2.jpg',
      ],
    },
    {
      id: 33,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        '/product-photos/children-trousers-3.jpg',
        '/product-photos/children-trousers-4.jpg',
      ],
    },
    {
      id: 46,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'eleganckie',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-shoes-3.jpg',
        '/product-photos/children-shoes-4.jpg',
      ],
    },
    {
      id: 47,
      gender: 'children',
      category: 'obuwie',
      subcategory: 'sneakersy',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        '/product-photos/children-shoes-5.jpg',
        '/product-photos/children-shoes-6.jpg',
        '/product-photos/children-shoes-7.jpg',
        '/product-photos/children-shoes-8.jpg',
      ],
    },
    {
      id: 48,
      gender: 'children',
      category: 'odziez',
      subcategory: 'spodnie',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/children-trousers-5.jpg',
        '/product-photos/children-trousers-6.jpg',
      ],
    },
    {
      id: 49,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        '/product-photos/children-t-shirt-1.jpg',
        '/product-photos/children-t-shirt-2.jpg',
      ],
    },
    {
      id: 51,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-t-shirt-3.jpg',
        '/product-photos/children-t-shirt-4.jpg',
      ],
    },
    {
      id: 52,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        '/product-photos/children-t-shirt-5.jpg',
        '/product-photos/children-t-shirt-6.jpg',
      ],
    },
    {
      id: 53,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/children-t-shirt-7.jpg',
        '/product-photos/children-t-shirt-8.jpg',
      ],
    },
    {
      id: 54,
      gender: 'children',
      category: 'odziez',
      subcategory: 'koszulki',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        '/product-photos/children-t-shirt-6.jpg',
        '/product-photos/children-t-shirt-5.jpg',
      ],
    },
    {
      id: 56,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-sweater-1.jpg',
        '/product-photos/children-sweater-2.jpg',
      ],
    },
    {
      id: 57,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        '/product-photos/children-sweater-3.jpg',
        '/product-photos/children-sweater-4.jpg',
      ],
    },
    {
      id: 58,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/children-sweater-5.jpg',
        '/product-photos/children-sweater-6.jpg',
      ],
    },
    {
      id: 59,
      gender: 'children',
      category: 'odziez',
      subcategory: 'swetry',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        '/product-photos/children-sweater-2.jpg',
        '/product-photos/children-sweater-1.jpg',
      ],
    },
    {
      id: 61,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-bag-1.jpg',
        '/product-photos/children-bag-2.jpg',
      ],
    },
    {
      id: 62,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 199,
      priceUSD: 39,
      photos: [
        '/product-photos/children-bag-3.jpg',
        '/product-photos/children-bag-4.jpg',
      ],
    },
    {
      id: 63,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'torby',
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        '/product-photos/children-bag-5.jpg',
        '/product-photos/children-bag-6.jpg',
      ],
    },
    {
      id: 64,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 599,
      priceUSD: 119,
      photos: [
        '/product-photos/children-watch-1.jpg',
        '/product-photos/children-watch-2.jpg',
      ],
    },
    {
      id: 66,
      gender: 'children',
      category: 'akcesoria',
      subcategory: 'zegarki',
      pricePLN: 499,
      priceUSD: 99,
      photos: [
        '/product-photos/children-watch-3.jpg',
        '/product-photos/children-watch-4.jpg',
      ],
    },
  ];

  const products = rawProducts.map(makeProduct);

  for (const p of products) {
    await prisma.product.create({
      data: {
        id: p.id,
        gender: p.gender,
        category: p.category,
        subcategory: p.subcategory,
        productName: p.productName,
        brand: p.brand,
        pricePLN: p.pricePLN,
        priceUSD: p.priceUSD,
        description: p.description,
        maintenanceInfo: p.maintenanceInfo,
        photos: {
          create: p.photos.map((url) => ({ url })),
        },
      },
    });
  }

  await prisma.favourite.createMany({
    data: [
      { id: 1, productId: 3 },
      { id: 2, productId: 2 },
    ],
  });

  console.log(`✅ Seed finished. Products: ${products.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
