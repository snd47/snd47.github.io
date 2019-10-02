<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h1>HELLO HOME</h1>
          {{message}}
        </div>
      </section>
      
    </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters.getMessage
    }
  }
}
</script>
