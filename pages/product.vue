<template>
  <div>
    <p>{{ product.name }}</p>
    <img class="img" :src="product.image" />
  </div>
</template>

<script>
import { generate_meta_jsonld } from '../helpers/jsonld'
import { generate_product_json } from '../packages/jsonld-helpers'

const test_data = {
  name: 'マコン・ヴェルゼ',
  image: '/images/LC1030012_2.png',
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

export default {
  fetch() {
    this.product = test_data
    this.jsonld = generate_meta_jsonld(generate_product_json(test_data))
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

<style scoped>
.img {
  width: 400px;
  height: 400px;
}
</style>
