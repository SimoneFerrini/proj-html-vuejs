<script>
    import {store} from "../../store";
    
    export default{
  data(){
    return{

        store,
    }
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
            <div class="shade-hover"></div>
        </div>
        <div class="text-container">
            <span class="title">{{ card.title }}</span>
            <span class="text">{{ card.text }}</span>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
  @use "../../varibiliScss.scss" as *;

  .single-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 2em;

    width: calc(100% / 3 - 30px / 3 * 2);

    &:hover{
        cursor: pointer;
    }

    .shade-hover{
        width: 100%;
        height: 100%;

        position: absolute;
        bottom: 0;
        left: 0;
    }

    .img-container{
        width: 100%;

        position: relative;

        .shade-hover{
        display: none;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, $paletteBlue 0%, transparent 60%);
        }

        &:hover .shade-hover{
            display: block;
        }

        img{
            width: 100%;
        }
        
    }

    .text-container{
        display: flex;
        flex-direction: column;

        .title{
            font-size: 1.5em;
            font-weight: 400;
            color: $paletteBlack;
        }

        .text{
            font-size: 0.7em;
            font-weight: 300;

        }
    }
  }



</style>