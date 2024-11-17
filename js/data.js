const products = [
  {
    id: 0,
    title: "Wind-protection all season red jacket",
    barnd: "RaindayJacket",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/women-pink-wind-jacket.jpg",
    altText:
      "A woman pink jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip the zipper and cuffs.",
    description:
      "A pink jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the zipper and cuffs, adding a stylish contrast to the light pink color. It includes a front zipper and convenient side pockets.",
  },
  // Test Note: Verify the product dummy or first product (id: 0)
  // - Check if clicking redirects to 'productview.html?productId=0'
  {
    id: 1,
    title: "Wind-protection all season white jacket",
    barnd: "Rainday Jacket",
    price: "545 kr",
    image: "/image/women-white-jacket.jpg",
    altText:
      "A woman white jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip the zipper and cuffs.",
    description:
      "A white jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip, zipper, and cuffs.",
  },

  // Test Note: Verify the product dummy or first product (id: 1)
  // - Check if clicking redirects to 'productview.html?productId=1'
  {
    id: 2,
    title: "Wind-protection all season gray jacket",
    barnd: "RaindayJacket",
    price: "545 kr",
    image: "/image/women-gray-jacket.jpg",
    altText:
      "A woman gray jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the zipper and side pockets.",
    description:
      "A gray jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the zipper and side pockets.",
  },
  // Test Note: Verify the  product (id: 2)
  // - Check if clicking redirects to 'productview.html?productId=2'
  {
    id: 3,
    title: "Wind-protection all season red jacket",
    barnd: "RaindayJacket",
    price: "545 kr",
    image: "/image/women-red-jacket.jpg",
    altText:
      "A woman red jacket suitable for all seasons, featuring warm insulated material. The jacket has black accentson on side the zipper and pockets.",
    description:
      "A red jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the zipper and side pockets.",
  },

  // Test Note: Verify the product (id: 3)
  // - Check if clicking redirects to 'productview.html?productId=3'

  {
    id: 4,
    title: "All season dark green jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-green-jacket.jpg",
    altText:
      "A dark green jacket for men, designed for wind protection with a high collar, front zipper, and side pockets.",
    description:
      "A green jacket for all seasons, featuring wind protection with a high collar, a front zipper, and side pockets for added convenience. Suitable for casual and outdoor activities.",
  },

  // Test Note: Verify the product (id: 4)
  // - Check if clicking redirects to 'productview.html?productId=4'

  {
    id: 5,
    title: "Wind-protection all season black jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-black-jacket.jpg",
    altText:
      "A black jacket for men, designed for wind protection with a high collar, front zipper, and side pockets.",
    description:
      "A black jacket for all seasons, featuring wind protection with a high collar, a front zipper, and side pockets for added convenience. Suitable for casual and outdoor activities.",
  },
  // Test Note: Verify the product (id: 5)
  // - Check if clicking redirects to 'productview.html?productId=5'
  {
    id: 6,
    title: "All season black winter jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-winter-jacket-black.jpg",
    altText:
      "A black winter jacket for men, designed for wind, rain, and winter. Features a high collar, durable water-resistant insulation, and a thick design for cold conditions with a zippered front and side pockets.",
    description:
      "A black winter jacket suitable for cold weather, featuring thick, water-resistant insulation, a high collar, and convenient side pockets. Provides warmth and durability in harsh conditions.",
  },

  // Test Note: Verify the product (id: 6)
  // - Check if clicking redirects to 'productview.html?productId=6'

  {
    id: 7,
    title: "Wind-protection all season red jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-winter-jacket-dark-green.jpg",
    altText:
      "A woman pink jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip the zipper and cuffs.",
    description:
      "A pink jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the zipper and cuffs, adding a stylish contrast to the light pink color. It includes a front zipper and convenient side pockets.",
  },
  // Test Note: Verify the product (id: 7)
  // - Check if clicking redirects to 'productview.html?productId=7'

  {
    id: 8,
    title: "Wind-protection all season navy blue jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-winter-jacket-navy-blue.jpg",
    altText:
      "A dark blue jacket women designed for wind, rain, and winter with high collar and a durable, water-resistant insulated and thick, suitable for cold conditions, and features a zippered front with side pockets.",
    description:
      "A dark blue jacket designed for wind, rain, and winter with a high collar. It is durable, water-resistant, and insulated, suitable for cold conditions, and features a zippered front with side pockets.",
  },
  // Test Note: Verify the product (id: 8)
  // - Check if clicking redirects to 'productview.html?productId=8'

  {
    id: 9,
    title: "Wind-protection all season red jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/women-red-wind-jacket.jpg",
    altText:
      "A woman light red jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip, the zipper, and cuffs.",
    description:
      "A light red jacket suitable for all seasons, featuring warm insulated material. It has black accents on the wrist tips, zipper, and cuffs, offering both warmth and style.",
  },
  // Test Note: Verify the product (id: 9)
  // - Check if clicking redirects to 'productview.html?productId=9'

  {
    id: 10,
    title: "Wind-protection all season light green jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/women-light-green-jacket.jpg",
    altText:
      "A woman light green jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on wrist tip, the zipper, and cuffs.",
    description:
      "A light green jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on the wrist tips, zipper, and cuffs, offering a chic and functional design.",
  },
  // Test Note: Verify the product (id: 10)
  // - Check if clicking redirects to 'productview.html?productId=10'

  {
    id: 11,
    title: "Wind-protection all season green jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/women-green-jacket.jpg",
    altText:
      "A woman light green jacket suitable for all seasons, featuring warm insulated material. The jacket has black accents on sides, tip, the zipper, and pockets.",
    description:
      "A light green jacket suitable for all seasons, with warm insulated material. It has black accents on the sides, tip, zipper, and pockets, designed for both warmth and style.",
  },
  // Test Note: Verify the product (id: 11)
  // - Check if clicking redirects to 'productview.html?productId=11'

  {
    id: 12,
    title: "Wind-protection all season navy blue jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-winter-jacket-navy-blue.jpg",
    altText:
      "A navy blue jacket man designed for wind, rain, and winter with high collar and a durable, water-resistant insulated and thick, suitable for cold conditions, and features a zippered front with side pockets.",
    description:
      "A navy blue jacket designed for wind, rain, and winter, featuring a high collar and durable, water-resistant insulation. Ideal for cold conditions, with a zippered front and side pockets.",
  },
  // Test Note: Verify the product (id: 12)
  // - Check if clicking redirects to 'productview.html?productId=12'

  {
    id: 13,
    title: "Wind-protection all season red jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-red-jacket.jpg",
    altText:
      "A red jacket for man wind protection with a high collar, front zipper, and side pockets.",
    description:
      "A red jacket for wind protection, featuring a high collar, front zipper, and side pockets. Ideal for varying weather conditions and all seasons.",
  },
  // Test Note: Verify the product (id: 13)
  // - Check if clicking redirects to 'productview.html?productId=13'

  {
    id: 14,
    title: "Wind-protection all season green jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-green-jacket.jpg",
    altText:
      "A light green jacket for man wind protection with a high collar, front zipper, and side pockets.",
    description:
      "A light green jacket for wind protection, featuring a high collar, front zipper, and side pockets. Perfect for any season and outdoor conditions.",
  },
  // Test Note: Verify the product (id: 14)
  // - Check if clicking redirects to 'productview.html?productId=14'

  {
    id: 15,
    title: "Wind-protection all season navy blue jacket",
    brand: "Raindays",
    price: "545 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/men-winter-jacket.jpg",
    altText:
      "A navy blue jacket man designed for wind, rain, and winter with high collar and a durable, water-resistant insulated and thick, suitable for cold conditions, and features a zippered front with side pockets.",
    description:
      "A navy blue jacket designed for wind, rain, and winter, with a high collar and water-resistant, insulated material. This jacket is ideal for cold weather conditions with a zippered front and side pockets.",
  },
  // Test Note: Verify the product (id: 15)
  // - Check if clicking redirects to 'productview.html?productId=15'

  {
    id: 16,
    title: "Winter collection - bright orange jacket",
    brand: "Raindays",
    price: "1800 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/ai-generated/ai-generated-men-orange-jacket.jpg",
    altText:
      "An AI-generated bright orange winter jacket designed for cold weather. The jacket is insulated and thick, with a zippered front and side pockets. Features a cozy hood for additional protection from wind and snow.",
    description:
      "A vibrant orange winter jacket with thick insulation, a zippered front, and side pockets. Designed for functionality and warmth, with a cozy hood for extra protection during cold weather.",
  },
  // Test Note: Verify the product (id: 16)
  // - Check if clicking redirects to 'productview.html?productId=17'
  {
    id: 17,
    title: "Winter collection - cream jacket",
    brand: "Raindays",
    price: "1800 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/ai-generated/ai-generated-women-cream-jacket.jpg",
    altText:
      "An AI-generated cream winter jacket designed for cold weather. The jacket is insulated and thick, with a zippered front and side pockets. Features a cozy hood for additional protection from wind and snow.",
    description:
      "A cream winter jacket with thick insulation, a zippered front, and side pockets. Designed for functionality and warmth, with a cozy hood for extra protection during cold weather.",
  },
  // Test Note: Verify the product (id: 17)
  // - Check if clicking redirects to 'productview.html?productId=17'
  {
    id: 18,
    title: "Winter collection - gray jacket",
    brand: "Raindays",
    price: "1800 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/ai-generated/ai-generated-men-gray-jacket.jpg",
    altText:
      "An AI-generated gray winter jacket designed for cold weather. The jacket is insulated and thick, with a zippered front and side pockets. Features a cozy hood for additional protection from wind and snow.",
    description:
      "A gray winter jacket with thick insulation, a zippered front, and side pockets. Designed for functionality and warmth, with a cozy hood for extra protection during cold weather.",
  },
  // Test Note: Verify the product (id: 18)
  // - Check if clicking redirects to 'productview.html?productId=18'
  {
    id: 19,
    title: "Winter collection - yellow jacket",
    brand: "Raindays",
    price: "1800 kr",
    sizeOptions: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"],
    image: "/image/ai-generated/ai-generated-women-yellow-jacket.jpg",
    altText:
      "An AI-generated yellow winter jacket designed for cold weather. The jacket is insulated and thick, with a zippered front and side pockets. Features a cozy hood for additional protection from wind and snow.",
    description:
      "A yellow winter jacket with thick insulation, a zippered front, and side pockets. Designed for functionality and warmth, with a cozy hood for extra protection during cold weather.",
  },
  // Test Note: Verify the product (id: 19)
  // - Check if clicking redirects to 'productview.html?productId=19'
];

export default products;
