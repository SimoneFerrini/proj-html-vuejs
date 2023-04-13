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
  <!--questa parte è in più rispetto alla consegna, può essere ottimizzata, ma la lascio per far vedere come pensavo di gestirla eventualmente -->
  <div class="div-page-not-found" v-if="store.activeIndex == 1"> !!! Sorry, the page Services is actually in maintenance !!! </div>
  <div class="div-page-not-found" v-if="store.activeIndex == 2"> !!! Sorry, the page About is actually in maintenance !!! </div>
  <div class="div-page-not-found" v-if="store.activeIndex == 3"> !!! Sorry, the page Videos is actually in maintenance !!! </div>
  <div class="div-page-not-found" v-if="store.activeIndex == 4"> !!! Sorry, the page Blog is actually in maintenance !!! </div>
  <div class="div-page-not-found" v-if="store.activeIndex == 5"> !!! Sorry, the page Store is actually in maintenance !!! </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
  .div-page-not-found{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
  }
</style>
