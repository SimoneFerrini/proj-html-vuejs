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
        <div class="card-border">
        </div>
            <div class="card-data">
                <i :class="card.icon"></i>
                <div class="flex-title">
                    <span class="title">{{ card.title }}</span>
                    <span class="subtitle">{{ card.subtitle }}</span>
                </div>
                <span class="text">{{ card.text }}</span>
                <span class="link">{{ card.link }} <i class="fa-solid fa-angle-right"></i></span>
            </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../../varibiliScss.scss" as *;

    .single-card{
        width: calc(100% / 3 - 25px / 3 * 2);

        position: relative;

        &:hover{
            cursor: pointer;
        }

        &:hover .card-border{
            transform: scale(105%);
            transition: linear 1s;
        }
        .card-border{
            width: 100%;
            height: 100%;

            border: 3px solid $paletteBlue;

            border-radius: 5px;

            position:absolute;
            top: 0;
            left: 0;
        }

        .card-data{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2em;

                padding: 4em 2em;

                text-align: center;

                i{
                    font-size: 3em;
                    color: $paletteWhite;
                }

                .flex-title{

                    display: flex;
                    flex-direction: column;
                    .title{
                    font-size: 2em;
                    font-weight: 400;
                    color: $paletteWhite;
                    }

                    .subtitle{
                        color: $paletteYellow;
                        font-size: 1.2em;
                        font-weight: 400;
                    }
                }

                .text{
                    font-size: 1.1em;
                    font-weight: 300;
                    color: $paletteGrey;
                }

                .link{
                    font-weight: 600;
                    color: $paletteWhite;

                    i{
                        font-size: 1em;
                    }
                }
            }
    }

</style>