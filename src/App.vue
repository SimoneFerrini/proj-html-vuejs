<!--How to proceed:

  Milestone1: fare uno schema mentale del layout da riprodurre, evidenziando eventuali componenti ripetitivi
  Milestone2: creare navbar (componente), in store, creare array dei links e indice attivo, renderlo dinamico e interattivo(es. hover)
  Milestone3: creare header (componente),
              disporre elementi con vari container, prestando attenzione ai due quadrati in alto a sx
              sfumare lo fondo e posizionarlo correttamente
  Milestone4: -sezioni-




-->
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
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>
</style>
