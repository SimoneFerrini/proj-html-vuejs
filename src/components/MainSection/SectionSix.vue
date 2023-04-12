<!--
   -div bgimage
   -div bg sfumatura
   -div container
        -titolone
        -separatore
        -paragrafo
        -button
    -vedi che c'è molto padding verticale!
-->
<script>
import { store } from "../../store";
import Separatore from "../MySeparatore.vue";

export default {
    data() {
        return {

            store,
        }
    },

    components: {
        Separatore,
    }
}
</script>

<template>
    <div class="bg-image">
        <div class="bg-shade">
            <div class="container">
                <h1>"I've failed over and over again in my life. And that is why I succeed."</h1>
                <Separatore class="yellow"></Separatore>
                <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donet sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis</p>
                <button class="btn">Buy Avada today <i class="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../varibiliScss.scss" as *;

.bg-image {
    background-image: url("../../../img/banner2-2x.jpg");
    width: 100%;
    height: 600px;

    background-size: cover;
    position: relative;

    .bg-shade {
        background: linear-gradient(0deg, $paletteBlack 0%, transparent 60%);
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        .container {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 1.5em;

            padding: 6em 0;
            width: 50%;

            h1{
                font-size: 3em;
                font-weight: 400;
                color: $paletteWhite;
            }

            .yellow{
                color: $paletteYellow;
                font-size: 1.5em;
                
            }

            p{
                color: $paletteWhite;
                font-size: 0.9em;
                font-weight: 400;
            }

            .btn{
                background-color: $paletteBlue;
                color: $paletteWhite;

                &:hover{
                    background-color: $paletteRed;
                }
            }

        }


    }


}
</style>