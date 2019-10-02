<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <div class="product__wrapper">
            <!-- slider -->
            <div class="product-slider">
              <carousel 
              :perPage='1'
              :paginationEnable='true'
              paginationColor='#b3b3b3'
              paginationActiveColor='#494ce8'
              >
                <slide v-for="(slide, index) in product.gallery" :key="index">
                  <img :src="slide.img" :alt="slide.name" >
                </slide>
                
              </carousel>
            </div>
            <!-- <div class="product-slider">
                <img :src="product.img" :alt="product.title">
            </div> -->
            <!-- content -->
            <div class="product-content">
                <h1 class="title">{{product.title}}</h1>
                <p>{{product.descr}}</p>
                <!-- <p>
                  <img :src="product.img" >
                </p> -->
            </div>

            </div>
            <!-- <h1>Product: {{id}}</h1> -->
            </div>
      </section>
      
    </div>
</template>

<script>


export default {
  data() {
    return {
      // id:this.$route.params.id
      product:null
    }
  },
    created () {
        // console.log(this.$route)
        // console.log({route:this.$route, id:this.$route.params.id})
        let id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
        // let product = this.product
        // console.log("Product:")
        // console.log(product)
    }
}
</script>

<style lang="scss">
.product__wrapper {
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.product-slider, .product-content {
  max-width: 48%;
  text-align: center;
  img {
    max-height:350px
  }
}
.VueCarousel-inner { 
	visibility: visible!important;
	flex-basis: 100%!important;
	width: 100%!important;
}
</style>


