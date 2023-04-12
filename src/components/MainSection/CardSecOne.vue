<!--creare layout card singola
    -creare array in store contenente i dati cards
    -creare le cards in modo dinamico da SectionOne.vue
        usando props 
-->

<script>
    import {store} from "../../store";
    import Separatore from "../MySeparatore.vue";

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    Separatore,
  },

  props:{
    Card: Object,
  }


}
</script>

<template>
    <div class="single-card-container">
        <div class="img-container">
            <img :src="Card.imgSrc" alt="img">
        </div>
        <div class="text-container">
            <Separatore class="card-separatore"></Separatore>
            <span class="card-title">{{ Card.title }}</span>
            <span class="card-txt">{{ Card.text }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @use "../../varibiliScss.scss" as *;

  .single-card-container{
    width: calc(100% / 3 - 20px / 3 * 2);
    height: 300px;

    position: relative;

    &:hover img {
            transform: scale(110%);
            transition: linear 1s;
        }

    .img-container{
        width: 100%;
        height: 100%;
        border-radius: 4px 4px 35px 4px;
        overflow: hidden;

        box-shadow: 0px 5px 5px $paletteBlack;


        img{
            width: 100%;
            
        }
    }

    .text-container{
        display: flex;
        flex-direction: column;
        justify-content: end;

        padding: 0 0 1.5em 1.5em;

        width: 100%;
        height: 40%;

        border-radius: 4px 4px 35px 4px;
        overflow: hidden;

        position: absolute;
        left: 0;
        bottom: 0;

        background: linear-gradient(0deg, $paletteBlack 0%, transparent 100%);

        .card-separatore{
            font-size: 0.6em;
        }

        .card-title{
            font-size: 1.8em;
            font-weight: 600;
        }

        .card-txt{
            font-size: 1.2em;
            font-weight: 600;
            color: $paletteYellow;
        }



    }
  }


</style>