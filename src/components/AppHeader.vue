<script>
    import {store} from "../store";
    
    export default{
     data(){
       return{

            store,
        }
    },
}

</script>

<template>
    <div class="bg-image">
        <div class="square-icons">
            <div class="top-left-icon">
                <div class="icon-top"><i class="fa-solid fa-folder-open"></i></div>
                <div class="icon-bot">Demos</div>
            </div>
            <!--section about bg and icon on left--------------------->
            <div class="top-left-icon">
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
                    ciao
                </div>
                <button><i class="fa-solid fa-play"></i></button>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    $paletteBlack: #060607;
    $paletteWhite: #FFFFFF;
    $paletteGrey: #98939F;
    $paletteBlue: #4154FF;
    $paletteRed: #FF414B;
    $paletteYellow: #FFF941;

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

            .top-left-icon{
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
                padding: 1.5em 10% 4em 0;
                height: 100%;

                button{
                    background-color: $paletteWhite;
                    color: $paletteBlue;
                    border: none;
                    border-radius: 50%;
                    font-size: 1.5em;
                    padding: 0.8em 1em;
                }
            }
        }
    }
</style>