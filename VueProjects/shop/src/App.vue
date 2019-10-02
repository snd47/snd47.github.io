<template>

  <div class="wrapper">
    
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Vue-cli</div>

            <ul class="navbar-list">
              
              <li class="navbar-item" v-for="link in links" :key="link.title">
                 <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
              </li>
             
            </ul>

          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  <!-- <footer></footer> -->

  </div>
</template>

<script>


export default { 
  data() {
    return {
      links: [
        {
          title:'Home',
          url: '/'
        },
        {
          title:'Shop',
          url: '/shop'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-link {
  &.router-link-exact-active {
    color:blue;
  }
}
</style>
