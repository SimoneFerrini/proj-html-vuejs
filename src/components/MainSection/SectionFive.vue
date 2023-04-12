<!--
    stesso procedimento di parte bot section two
    -flex between alle scritte
    -creo array in store con i dati delle cards
    -v-for e passo elementi a component card sec five
-->
<script>
import { store } from "../../store";

import Card from "./CardSecFive.vue";


export default {
    data() {
        return {

            store,
        }
    },

    components: {
        Card,
    }
}
</script>

<template>
    <div class="bgcolor">
       
        <div class="container">
            <div class="container-text">
                <span class="span-big">Latest articles</span>
                <span class="span-small">Read all articles <i class="fa-solid fa-angle-right"></i></span>
            </div>
            <div class="cards-container">
                <Card v-for="card in store.secFiveCards" :card="card"></Card>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../varibiliScss.scss" as *;

.bgcolor {
    background-color: $paletteWhite;
    width: 100%;

    position: relative;
    color: $paletteBlack;

    .container {
        .container-text {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: end;
            width: 100%;

            padding-top: 5em;

            .span-big {
                font-size: 1.5em;
                font-weight: 600;
            }

            .span-small {
                font-size: 0.8em;
                font-weight: 600;
                padding-right: 9em;
            }
        }

        .cards-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            padding: 2em 0;
        }
    }
}
</style>