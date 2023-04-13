<!--How to proceed:

 OK- Milestone1: fare uno schema mentale del layout da riprodurre, evidenziando eventuali componenti ripetitivi
 OK- Milestone2: creare navbar (componente), in store, creare array dei links e indice attivo, renderlo dinamico e interattivo(es. hover)
 OK- Milestone3: creare header (componente),
              disporre elementi con vari container, prestando attenzione ai due quadrati in alto a sx
              sfumare lo fondo e posizionarlo correttamente
OK- Milestone4: crea componente separatore(^^^)
    Milestone5: creare il main e predisporre components section (da 1 a 8)
      -section1:
      -
      -
      -
      -
      -
      -
      -
    Milestone6: footer + copyright




-->
<script>
  import {store} from "./store";
  import AppNavbar from "./components/AppNavbar.vue";
  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  import AppFooter from "./components/AppFooter.vue";

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
    AppFooter,
  },
}
</script>

<template>
  <AppNavbar></AppNavbar>
  <div v-if="store.activeIndex == 0">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
</style>
