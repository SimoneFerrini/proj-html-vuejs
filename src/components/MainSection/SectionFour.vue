<!--
   bg black
   importare componente card sec four
   v for dove passo i dati da array creato in store
   vedere se funziona layout statico
   renderlo dinamico
-->
<script>
    import {store} from "../../store";
    import Card from "./CardSecFour.vue";
    

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    Card,
  }
}
</script>

<template>
    <div class="bgcol">
        <div class="cards-container container">
            <Card v-for="card in store.secFourCards" :card="card"></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../../varibiliScss.scss" as *;

    .bgcol{
        background-color: $paletteBlack;
        padding: 3em 0;
    }
    .cards-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 3em 0;
        
    }
</style>