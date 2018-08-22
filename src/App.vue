<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import '@/assets/css/icons.css';
export default {
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand');
* {
  outline: 0 !important;
  font-family: 'Quicksand', sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
    padding: 0px;
    margin: 0px;
}
.pt-2-custom-avatar-thumb-post {
  padding-top: .32rem;
}
.po-re-2 {
    position: relative;
    top: -1.2px;
}

.flex-2 {
    flex: 2;
}
.flex-3 {
    flex: 3;
}
.flex-4 {
    flex: 4;
}
.text-xs {
    font-size: 0.65rem !important;
}
</style>