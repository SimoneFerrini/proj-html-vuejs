<!--
    -container img position absolute
    -container testo e card diviso in top e bot
        -container top: flexare in colonna a destra i testi
        -container bot: flexare space between le scritte
            -implementare prima card statiche
            -renderle dinamiche
-->
<script>
    import {store} from "../../store";
    import PlayButton from "../PlayButton.vue";


    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    PlayButton,
  }
}
</script>

<template>
    <div class="bgcolor">
        <div class="img-container">
            <img src="../../../img/service15-2x.jpg" alt="img"> 
            <div class="play-container">
                <PlayButton></PlayButton>
            </div>
        </div>
       
      
        <div class="container">
            <div class="top-container">
                <div class="top-right">

                    <span>Tune up your workouts</span>
                    <h1>The best healt & fitness advice online</h1>
                    <div class="logo-yt-topR">
                        <div class="logo-container">
                            <img src="../../../img/unnamed.jpg" alt="img">
                        </div>
                        <div class="topR-small-txt-container">
                            <span>ThemeFusion</span>
                            <div>
                                <span class="red-tube"> YouTube </span>
                                <span class="border-counter"> 999+ </span>
                            </div>
                        </div>
                    </div>
                    <p>Arcu eu facilist ut quisque placerant nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</p>
                    <div>
                        <button class="btn red"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</button>
                    </div>
                </div>
            
            </div>
            <div class="bot-container">

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @use "../../varibiliScss.scss" as *;

    .bgcolor{
        background-color: $paletteWhite;
        width: 100%;
        
        position: relative;
        color: $paletteBlack;

        .img-container{
            width: calc(80vw / 2);
            height: calc(80vw / 2);
            border-radius: 2px 2px 35px 2px;
            overflow: hidden;
            position: absolute;
            left: 0;
            top: -2em;

            img{
                width: 100%;

                &:hover{
                    cursor:pointer;
                }
            }

            .play-container{
                position: absolute;

                top: 50%;
                left: 50%;
                translate: -50%;
                
            }
                        
        }

        .container{
                display: flex;
                flex-direction: column;
                gap: 1em;
                
                padding: 5em 0 5em 0;

                .top-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: end;

                    .top-right{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 2em;

                        width: 40%;

                        span{
                            font-size: 1.2em;
                            font-weight: 600;
                            color: $paletteBlue;
                        }

                        h1{
                            font-size: 2.5em;
                            font-weight: 400;
                        }

                        .logo-yt-topR{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            gap:1em;

                            .logo-container{
                                width: 40px;
                                height: 40px;

                                img{
                                    width: 100%;
                                }
                            }

                            .topR-small-txt-container{
                                display: flex;
                                flex-direction: column;
                                

                                span{
                                    font-size: 0.8em;
                                    font-weight: 400;
                                    color: $paletteBlack;
                                }

                                .red-tube{
                                    background-color: $paletteRed;
                                    border: 1px solid $paletteRed;
                                    color: $paletteWhite;
                                    padding: 5px;
                                }

                                .border-counter{
                                    padding: 5px;
                                    border-top: 1px solid $paletteGrey;
                                    border-right: 1px solid $paletteGrey;
                                    border-bottom: 1px solid $paletteGrey;
                                }

                            }
                        }

                        p{
                            font-weight: 300;
                        }

                        .red{
                            background-color: $paletteRed;

                            &:hover{
                                border: 1px solid $paletteRed;
                                color: $paletteRed;
                                background-color: $paletteWhite;
                            }
                        }

                    }
                }


            }
    }
    
</style>