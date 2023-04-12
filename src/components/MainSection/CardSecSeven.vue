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
    card: Object,
  }


}
</script>

<template>
    <div class="single-card">
        <div class="img-container">
            <img :src="card.imgSrc" alt="img">
        </div>
        <Separatore class="blue"></Separatore>
        <p>{{ card.text }}</p>
        <a href="">{{ card.link }} <i class="fa-solid fa-angle-right"></i></a>
    </div>

</template>

<style lang="scss" scoped>
  @use "../../varibiliScss.scss" as *;

    .single-card{
        width: calc(100% / 4 - 20px / 4 * 3);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1em;

        .img-container{
            width: 60%;
            

            img{
                width: 100%;
            }
        }

        .blue{
            color: $paletteBlue;
            font-size: 1.2em;
            font-weight: 300;
        }

        a{
            text-decoration: none;
            color: $paletteBlack;
            font-size: 1.2em;
            font-weight: 600;
        }

    }
</style>