<!--
    -sfondo tutto schermo (nero)
    -container flex spacebetween
    -a sx - logo, home on click
    -a dx- ul links, button, icons
    -SE avazna tempo sistema shop new (si sposta quando scompare)
    -aggiungi effetti hover
-->
<script>
    import {store} from "../store";

    export default{
     data(){
       return{

           store,
        }
    },

    methods:{
        setActiveInded(index){
            this.store.activeIndex = index;
            if(this.store.navLinks[index].isNew){
                this.store.navLinks[index].isNew = false;
            }

        }
    }
}

</script>

<template>
    <div class="nav-bgc">
        <div class="container">
            <div class="logo">
                <a href="../../index.html"> <img src="../../img/logo.png" alt="logo"></a>
            </div>
            <div class="nav-rightside">
                <ul class="nav-links">
                    <li v-for="(link,index) in store.navLinks" :class="index == store.activeIndex ? 'active' : '' " @click="setActiveInded(index)">
                        <span>{{ link.name }}</span>
                        <div class="nav-new" v-if="link.isNew"> New </div>
                        
                    </li>
                </ul>
                <button class="btn">Schedule a workout</button>
                <div class="nav-icons">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    @use "../varibiliScss.scss" as *;

    .nav-bgc{
        background-color: $paletteBlack;
        padding: 1.5em 0;

        .container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            color: $paletteGrey;

            .nav-rightside{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 1em;

                .nav-links{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 3em;

                list-style: none;
                color: $paletteGrey;

                margin-right: 2.5em;

                li{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.5em;

                    font-weight: bold;

                    position: relative;

                    &:hover{
                        cursor: pointer;
                    }

                    &.active{
                        color: $paletteWhite;
                    }

                    .nav-new{
                        color: black;
                        background-color: $paletteYellow;
                        border-radius: 4px;
                        text-transform: lowercase;
                        font-weight: 400;
                        padding: 2px 6px;

                        position: absolute;
                        top: 0;
                        right: -45px;

                    }

                    }
                }

                .btn{
                    background-color: $paletteBlue;
                    

                    &:hover{
                        background-color: $paletteRed;
                    }
                }

                .nav-icons{
                    font-size: 1.3em;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1em;

                    i:hover{
                        color: $paletteWhite;
                        cursor: pointer;
                    }
                }
            }
            
        }

    }
</style>