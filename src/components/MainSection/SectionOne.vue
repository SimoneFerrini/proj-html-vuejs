<script>
    import {store} from "../../store";
    import Separatore from "../MySeparatore.vue";
    import SingleCard from "./CardSecOne.vue";

    export default{
  data(){
    return{

        store,
    }
  },

  components:{
    Separatore,
    SingleCard,
  }
}
</script>

<template>
  <div class="bgcol">
    <div class="container">
        <div class="cards-container">
            <SingleCard v-for="card in store.secOneCards" :Card="card"></SingleCard>
        </div>
        <div class="text-container">
            <p>"How you respond to the challenge in the second half will determine what you became after the game, whether you are a winner or a loser"</p>
            <Separatore class="yellow"></Separatore>
            <div class="profile-container">
                <div class="profile-img-container">
                    <img src="../../../img/avatar-1-2x.jpg" alt="profile-img">
                </div>
                <span class="profile-name">Brad Johnson</span>
                <span class="profile-location">Las Vegas</span>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @use "../../varibiliScss.scss" as *;
    .bgcol{
        background: linear-gradient(135deg, $paletteBlue 0%, $paletteRed 100%);
        height: 630px;
        width: 100%;

        

        .container{
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;
            gap:3em;
            padding-bottom: 5em;
            height: 100%;
            position: relative;

            .cards-container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 20px;

                position: absolute;
                left: 0;
                top: -2em;
            }

            .text-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1em;
                width: 70%;

                p{
                    font-size: 2em;
                    font-weight: 600;
                    text-align: center;
                }

                .yellow{
                    color: $paletteYellow;
                }

                .profile-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1em;

                    .profile-img-container{
                        display: flex;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        overflow: hidden;
                    }

                    .profile-name{
                        font-weight: bold;
                    }

                    .profile-location{
                        font-weight: 200;
                    }
                }
            }

        }
    }
</style>