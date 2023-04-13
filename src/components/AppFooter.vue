<!--
    div bg black - flex column center
        div container top - flex row 3 colonne
            3*div per colonna - flex column
        div container bot - border top 100% flex center
            copyright


-->
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
    <div class="bgcolor">
        <div class="footer-top">
            ciao
        </div>
        <div class="footer-bot">
            <div class="container">
                <span><i class="fa-regular fa-copyright"></i> 
                    Copyright 2012 - 2020 | Avada theme by 
                    <span class="sponsor"> ThemeFusion </span>
                    | All rights reserved | Powered by 
                    <span class="sponsor"> WordPress</span>
                </span>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    @use "../varibiliScss.scss" as *;

    .bgcolor{
        background-color: $paletteBlack;
        color: $paletteWhite;

        .footer-bot{
            width: 100%;
            border-top: 1px solid $paletteGrey;

            .container{
                display: flex;
                justify-content: center;
                padding: 2em 0;

                span{
                    font-size: 0.8em;
                    font-weight: 300;
                    color: $paletteGrey;

                    &.sponsor{
                        color: $paletteWhite;
                        font-weight: 500;
                        font-size: 0.9em;
                    }
                }
            }
        }
    }

</style>