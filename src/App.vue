<script>
  import {store} from "./store";
  import AppNavbar from "./components/AppNavbar.vue";
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  

  export default{
  data(){
    return{

        store,
    }
  },

  components:{
    AppNavbar,
    AppHeader,
    AppMain,
  },
}
</script>

<template>
  
</template>

<style lang="scss" scoped>
</style>
