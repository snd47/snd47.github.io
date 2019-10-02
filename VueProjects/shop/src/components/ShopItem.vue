<template>
    <div class="item">
        <!-- <p>item</p> -->

        <img :src="product.img" :alt="product.title">
        <!-- <p>{{product.title}}</p> -->
        <p><router-link :to="/shop/ + product.id" class="link">{{product.title}}</router-link></p>
        
    </div>
    
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">

.item__wrapper {
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-wrap:wrap;
}
.item {
    margin:10px;
    max-width:48%;
    // text-align: center;
    p {
        font-size: 22px;
    }
    img {
        width:750px;
        height: auto;
    }
}
</style>