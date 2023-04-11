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
  $paletteBlack: #060607;
  $paletteWhite: #FFFFFF;
  $paletteGrey: #98939F;
  $paletteBlue: #4154FF;
  $paletteRed: #FF414B;
  $paletteYellow: #FFF941;
</style>