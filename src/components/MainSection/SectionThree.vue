<!--
   -bg-image
   -aggiungere div per sfumatura img
   -flex column di span, h1, separatore(importare), div(input email, button),p
   -stilizzare
-->
<script>
    import {store} from "../../store";
    import Separatore from "../MySeparatore.vue";

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
    <div class="img-bg">
        <div class="bg-shade">
            <div class="container">
                <span class="red">Join our mailing list today</span>
                <h1 class="sect-title">Insider offers & flash sales in your inbox every week.</h1>
                <Separatore class="yellow"></Separatore>
                <div class="email-container">
                    <input type="email" placeholder="Insert your E-mail...">
                    <button class="btn">Subscribe</button>
                </div>
                <p class="grey">Curabitur non nulla sit amet nisl tempus convallis quic ac lectus dolor sit amet, consectetur adisciping elit sed porttitor lectus.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../../varibiliScss.scss" as *;

    .img-bg{
        background-image: url("../../../img/banner1-2x.jpg");
        background-size: cover;
        position: relative;
        width: 100%;
        height: 500px;
        
        .bg-shade{
            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;
            left: 0;

            background: linear-gradient(90deg, $paletteBlack 0%, $paletteBlack 35%, transparent 100%);

            .container{

                margin-left: 15%;
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 2em;

                padding: 3em 0;
            }

            .red{
                color: $paletteRed;
                font-size: 1.2em;
                font-weight: 600;
            }

            .title{
                font-size: 3em;
                font-weight: 600;
                
            }

            .yellow{
                color: $paletteYellow;
                font-size: 1.4em;
            }

            .email-container{
                display: flex;
                flex-direction: row;
                gap: 2em;
                width: 100%;

                input{
                    background-color: $paletteWhite;
                    color: $paletteBlack;
                    width: 55%;
                    border-radius: 25px;
                    padding: 0 1.5em;
                }

                .btn{
                    width: 30%;
                    color: $paletteWhite;
                    background-color: $paletteBlue;

                    &:hover{
                        background-color: $paletteRed;
                    }
                }
            }

            .grey{
                color: $paletteGrey;
                font-weight: 300;
            }
        }
       
    }
    
</style>