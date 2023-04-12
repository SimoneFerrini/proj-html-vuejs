

<!--creare layout card singola
    -creare array in store contenente i dati cards
    -creare le cards in modo dinamico da SectionTwo.vue
        usando props 
-->

<script>
    import {store} from "../../store";
    import Separatore from "../MySeparatore.vue";
    import PlayButton from "../PlayButton.vue";

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    Separatore,
    PlayButton,
  },

  props:{
    card: Object,
  }


}
</script>

<template>
    <div class="single-card">
        <div class="img-container">
            <img :src="card.imgSrc" alt="img">
            <div class="play-container">
                <PlayButton class="small-btn"></PlayButton>
            </div>
        </div>
        <span class="card-title">{{ card.title }}</span>
        <span class="card-text">{{card.text}}</span>
    </div>
</template>

<style lang="scss" scoped>
  @use "../../varibiliScss.scss" as *;

  .single-card{
    display: flex;
    flex-direction: column;
    
    align-items: center;

    width: calc(100% / 3 - 2em / 3 * 2);

    &:hover{
        cursor: pointer;
        box-shadow: 5px 5px 5px $paletteGrey;
    }

    .img-container{
        width: 100%;
        border-radius: 0 0 35px 0;
        overflow: hidden;
        margin-bottom: 1.5em;

        position: relative;

        img{
            width: 100%;
        }

        .play-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            position: absolute;

            top: 0;
            left:0;

            .small-btn{
                font-size: 0.8em;
            }
            

        }
    }

    .card-title{
        font-size: 1.3em;
        font-weight: 600;
    }

    .card-text{
        font-size: 1em;
        font-weight: 600;
        color: $paletteBlue;
    }


  }

</style>