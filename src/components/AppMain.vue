<!--
  il main conterrà tutte le varie section
  (vedi singole section per i dettagli)
-->

<script>
    import {store} from "../store";
    import SectionOne from "./MainSection/SectionOne.vue";

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    SectionOne,
  }
}
</script>

<template>
  <SectionOne></SectionOne>
</template>

<style lang="scss" scoped>
  @use "../varibiliScss.scss" as *;
</style>