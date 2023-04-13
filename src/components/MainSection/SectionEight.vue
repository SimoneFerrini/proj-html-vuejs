<!--
   -div bgimage
    -div container flex center
        -import playbutton
        -playbutton
        -h1
        -span
        -link
-->

<script>
import { store } from "../../store";
import PlayButton from "../PlayButton.vue";

export default {
    data() {
        return {

            store,
        }
    },

    components: {
        PlayButton,
    }
}
</script>

<template>
    <div class="bg-image">
        <div class="bg-shade">
            <div class="container">
                <PlayButton></PlayButton>
                <h1>Crossfit workout of the day</h1>
                <span>November 15th, 2019</span>
                <a href="">View all videos <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../varibiliScss.scss" as *;

    .bg-image{
        background-image: url("/img/banner14-2x.jpg");
        background-size: cover;
        height: 600px;
//se volessi img più scura potrei invertire bg colorato e bg image e dare opacity diversa a img
        .bg-shade{
            background: linear-gradient(135deg, #0011aa9e 0%, #7100009e 100%);
        height: 100%;
        width: 100%;

            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2em;

                height: 100%;

                padding: 7em 0;

                h1{
                    font-size: 2.5em;
                    font-weight: 600;
                    color: $paletteWhite;
                }

                span{
                    font-size: 2em;
                    font-weight: 500;
                    color: $paletteYellow;
                }

                a{
                    text-decoration: none;
                    color: $paletteWhite;
                    font-size: 1em;
                    font-weight: 500;
                }
            }

        }
    }

</style>