<!--
    -sfondo img tutto schermo
    -sfondo sfumato tutto schermo
    -container
    -position absolute su quadrati in alto a dx
    -div con testo e divisore
    -iniziare a creare componente per divisore (^^^)
    -button play (flexato centralmente insieme a text container)
    -ricorda padding bottom superiore per imagine di section1 che "sborda"
    -aggiungi effetti hover

-->
<script>
    import {store} from "../store";
    import Separatore from "./MySeparatore.vue";
    
    export default{
     data(){
       return{

            store,
        }
    },

    components:{
        Separatore,
    }

    
}

</script>

<template>
    <div class="bg-image">
        <div class="square-icons">
            <div class="top-right-icon">
                <div class="icon-top"><i class="fa-solid fa-folder-open"></i></div>
                <div class="icon-bot">Demos</div>
            </div>
            <!--section about bg and icon on left--------------------->
            <div class="top-right-icon">
                <div class="icon-top">
                    <span class="green-dollar">$</span>
                    <span class="green-number">39</span>
                </div>
                <div class="icon-bot">On Sale</div>
            </div>
        </div>
        <div class="bg-shade">
            <!--section about the header main-------------------------->
            <div class="container">
                <div class="header-text">
                    <span class="red">Certified fitness professional</span>
                    <h1>Take control of your healt</h1>
                    <Separatore class="yellow"></Separatore>
                    <span class="grey">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</span>
                    <div class="btns-container">
                        <button class="btn primary"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</button>
                        <button class="btn secondary">Buy Avada today <i class="fa-solid fa-arrow-right"></i> </button>
                    </div>
                </div>
                <button class="play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    @use "../varibiliScss.scss" as *;

    .bg-image{
        background-image: url("../../img/slider82x-scaled.jpg");
        width: 100%;
        height: 500px;
        background-size: cover;
        position: relative;

        .square-icons{
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            position: absolute;
            right: 1.5em;
            top: 2.5em;

            .top-right-icon{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: $paletteBlack;
                background-color: $paletteWhite;
                border-radius: 5px;
                height: 60px;
                width: 60px;


                .icon-top{
                    display: flex;
                    align-items: start;
                    font-size: 1.4em;
                    max-height: 34px;


                    .green-dollar{
                        color: rgb(107, 182, 69);
                        font-size: 0.7em;
                        font-weight: bold;
                    }

                    .green-number{
                        color: rgb(107, 182, 69);
                        font-size: 1.4em;
                        font-weight: bold;
                    }
                }

                .icon-bot{
                    font-size: 0.8em;
                    
                }
            }
        }
        .bg-shade{
            height: 100%;
            width: 100%;

            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(to right,
            rgba(0,0,0, 1) 20%,
            rgba(0,0,0, 0.9)40%,
            rgba(0,0,0,0.6) 50%,
            rgba(0,0,0,0.0) 60%); 

            .container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 1.5em 10% 5em 0;
                height: 100%;

                .header-text{
                    display: flex;
                    flex-direction: column;
                    gap: 1.5em;
                    .red{
                    color: $paletteRed;
                    font-size: 1.2em;
                    font-weight: 600;
                    }

                    h1{
                        font-size: 3em;
                        font-weight: 600;
                    }
                    .grey{
                        color: $paletteGrey;
                        font-size: 1.1em;
                        font-weight: 600;
                    }

                    .btns-container{
                        display: flex;
                        flex-direction: row;
                        gap: 1.5em;

                        .primary{
                            background-color: $paletteBlue;

                            &:hover{
                                background-color: $paletteRed;
                            }
                        }

                        .secondary{
                            background-color: $paletteBlack;
                            border: 1px solid $paletteGrey;

                            &:hover{
                                background-color: $paletteWhite;
                                color: $paletteBlack;
                            }
                        }  
                    }

                    .yellow{
                        color: $paletteYellow;
                    }

                }

                

                .play-btn{
                    background-color: $paletteWhite;
                    color: $paletteBlue;
                    border: none;
                    border-radius: 50%;
                    font-size: 1.5em;
                    padding: 0.8em 1em;

                    &:hover{
                        background-color: $paletteBlue;
                        color: $paletteWhite;
                        border: 1px solid $paletteGrey;
                    }
                }
            }
        }
    }
</style>