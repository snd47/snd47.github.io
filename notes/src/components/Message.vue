<template>
    <h1>Message Component - {{mes}}</h1>
</template>

<script>
export default {
    props: { 
        mes: {
            type:[String, Number], 
            required: true
         }
    }
}
</script>

<style lang="scss" scoped>

h1 {
    text-align:center;
    padding:10px;
    color:red;
}
</style>