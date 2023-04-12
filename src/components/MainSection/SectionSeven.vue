<!--
    -creo array in store con i dati delle cards
    -v-for e passo elementi a component card sec five
-->
<script>
import { store } from "../../store";

import Card from "./CardSecSeven.vue";


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
    <div class="bg-color">
        <div class="container">
            <div class="cards-container">
                <Card v-for="card in store.secSevenCards" :card="card"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../varibiliScss.scss" as *;

    .bg-color{
        background-color: $paletteWhite;
        width: 100%;
        color: $paletteBlack;

        .container{
            padding: 8em 0;

            .cards-container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
    }


</style>