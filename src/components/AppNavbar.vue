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
                <img src="../../img/logo.png" alt="logo">
            </div>
            <div class="nav-rightside">
                <ul class="nav-links">
                    <li v-for="(link,index) in store.navLinks" :class="index == store.activeIndex ? 'active' : '' " @click="setActiveInded(index)">
                        <span>{{ link.name }}</span>
                        <div class="nav-new" v-if="link.isNew"> New </div>
                        
                    </li>
                </ul>
                <button>Schedule a workout</button>
                <div class="nav-icons">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    $paletteBlack: #060607;
    $paletteWhite: #FFFFFF;
    $paletteGrey: #98939F;
    $paletteBlue: #4154FF;
    $paletteRed: #FF414B;
    $paletteYellow: #FFF941;

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
                gap: 1.5em;

                .nav-links{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 1.5em;

                list-style: none;
                color: $paletteGrey;

                li{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.5em;

                    font-weight: bold;

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
                        padding: 2px 8px;

                    }

                    }
                }

                button{
                    padding: 1em 1.5em;
                    background-color: $paletteBlue;
                    border-radius: 25px;
                    font-size: 0.9em;
                    border: none;

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
                    gap: 1.5em;

                    i:hover{
                        color: $paletteWhite;
                        cursor: pointer;
                    }
                }
            }
            
        }

    }
</style>