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
            <div class="container">
                <div class="col first">
                    <div class="img-container">
                        <img src="/img/logo.png" alt="img">
                    </div>
                    <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia aliquid ea eos excepturi minus tempora maiores illum exercitationem corporis nulla quae et ullam, maxime obcaecati repellendus non autem veniam.</p>
                    <ul>
                        <li v-for="icon in store.iconSocial">
                            <a href=""><i :class="icon"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col second">
                    <h3>Recent Posts</h3>
                    <ul>
                        <li v-for="item in store.recentPosts">
                            <a href=""><i class="fa-solid fa-angle-right"></i> {{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col third">
                    <h3>Contact Information</h3>
                    <span class="location">{{ store.footerContact.location }}</span>
                    <span class="contact">Mobile: {{store.footerContact.mobile}}</span>
                    <span class="contact">Email: {{store.footerContact.email}}</span>
                </div>
            </div>
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
       
        //top-----------------------------------------------------------------------
        .footer-top{
            .container{
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                padding: 9em 0;

                .col{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1.5em;

                    width: calc(100% / 3 - 60px / 3 * 2);
                }

                //prima colonna - sinistra --------------------------------------------
                .col.first{
                    .img-container{
                        width: 80%;

                        img{
                            width: 100%;
                        }
                    }

                    .text{
                        font-size: 0.9em;
                        font-weight: 500;
                        color: $paletteGrey;
                    }

                    ul{
                        display: flex;
                        flex-direction: row;
                        gap: 1em;
                        list-style-type: none;

                        li{
                            a{
                                color: $paletteRed;
                            }
                        }

                    }
                }
                //secondo colonna - centrale ------------------------------------------
                .col.second{
                    h3{
                        font-weight: 400;
                        text-transform: uppercase;
                        margin-bottom: 2em;
                    }

                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 1.5em;
                        list-style: none;

                        li{
                            a{
                                color: $paletteWhite;
                                text-decoration: none;
                            }
                        }
                    }
                }

                //terza colonna - destra---------------------------------------------
                .col.third{
                    display: flex;
                    flex-direction: column;
                    gap: 1em;

                    h3{
                        font-weight: 400;
                        text-transform: uppercase;
                        margin-bottom: 2em;
                    }

                    .location{
                        color: $paletteGrey;
                        font-weight: 400;
                        margin-bottom: 2em;
                    }

                    .contact{
                        font-size: 1.1em;
                        color: $paletteWhite;
                        font-weight: 800;
                    }
                }


            }
        }
        //bot-----------------------------------------------------------------------
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