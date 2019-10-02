<template>
    <div class="wrapper-content wrapper-content--fixed">
      <div id="app">
        <h1>Shop Page</h1>
          <div class="item__wrapper">
          <item 
            v-for="product in shopList" :key="product.id"
            :product="product"
          />
          </div>
      </div>
      
    </div>
</template>

<script>

import item from '@/components/ShopItem.vue'

export default {
  components: {item},
  data() {
    return {
      shopList: null
    }
  },
  created() {
    
    this.shopList = this.$store.getters.getShopList
    console.log(this.shopList)
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
