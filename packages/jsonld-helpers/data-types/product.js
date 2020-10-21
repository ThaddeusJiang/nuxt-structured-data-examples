export const generate_product_json = ({
  name,
  description,
  image,
  brand,
  aggregateRating,
  offers,
}) => ({
  '@context': 'http://schema.org',
  '@type': 'Product',
  name,
  description,
  image: [image],
  sku: '0446310786',
  mpn: '925872',
  brand: {
    '@type': 'Brand',
    name: brand,
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Fred Benson',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: aggregateRating.ratingValue,
    reviewCount: aggregateRating.reviewCount,
  },
  offers: {
    '@type': 'Offer',
    url: offers.url,
    priceCurrency: offers.priceCurrency,
    price: offers.price,
    priceValidUntil: offers.priceValidUntil,
    availability: offers.availability,
  },
})
