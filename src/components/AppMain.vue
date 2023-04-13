<!--
  il main conterrà tutte le varie section
  (vedi singole section per i dettagli)
-->

<script>
    import {store} from "../store";
    import SectionOne from "./MainSection/SectionOne.vue";
    import SectionTwo from "./MainSection/SectionTwo.vue";
    import SectionThree from "./MainSection/SectionThree.vue";
    import SectionFour from "./MainSection/SectionFour.vue";
    import SectionFive from "./MainSection/SectionFive.vue";
    import SectionSix from "./MainSection/SectionSix.vue";
    import SectionSeven from "./MainSection/SectionSeven.vue";
    import SectionEight from "./MainSection/SectionEight.vue";

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
  },

}
</script>

<template>

  <SectionOne></SectionOne>
  <SectionTwo></SectionTwo>
  <SectionThree></SectionThree>
  <SectionFour></SectionFour>
  <SectionFive></SectionFive>
  <SectionSix></SectionSix>
  <SectionSeven></SectionSeven>
  <SectionEight></SectionEight>

</template>

<style lang="scss" scoped>
  @use "../varibiliScss.scss" as *;
</style>