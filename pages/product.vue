<template>
  <section>product</section>
</template>

<script>
const test_data = {
  name: 'マコン・ヴェルゼ',
  image: '/images/LC1030012.jpg',
  description:
    'ピュリニーの至宝であり、世界最高峰の白ワインの造り手。ドメーヌ・ルフレーヴのスタイルを手頃な価格で堪能できるコスパ抜群の白ワイン。',
  sku: 'LC10305803B8',
  brand: 'ドメーヌ・ルフレーヴ',
  aggregateRating: {
    ratingValue: '5.0',
    reviewCount: '4',
  },
  offers: {
    url: 'https://www.enoteca.co.jp/item/detail/LC10305803B8',
    priceCurrency: 'JPY',
    price: '5000',
    availability: 'https://schema.org/InStock',
  },
}

const generate_product_jsonld_script = ({
  name,
  description,
  image,
  brand,
  aggregateRating,
  offers,
}) => ({
  type: 'application/ld+json',
  json: {
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
  },
})

export default {
  fetch() {
    this.product = test_data
    this.jsonld = generate_product_jsonld_script(test_data)
  },
  data() {
    return {
      product: {
        name: '',
        image: '',
      },
      jsonld: {},
    }
  },
  head() {
    return {
      title: this.product.name,
      script: [this.jsonld],
    }
  },
}
</script>
