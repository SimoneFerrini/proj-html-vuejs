import {reactive} from 'vue';

export const store = reactive({
   //navbar-----------------------
   
    navLinks: [
        {
            name:"Home",
            isNew: false,
        },
        {
            name:"Services",
            isNew: false,
        },
        {
            name:"About",
            isNew: false,
        },
        {
            name:"Videos",
            isNew: false,
        },
        {
            name:"Blog",
            isNew: false,
        },
        {
            name:"Store",
            isNew: true,
        },
    ],

    activeIndex: 0,

    //header----------------------

    //main, section one, card section one
    secOneCards:[
        {
            imgSrc: "../../../img/service6-2x.jpg",
            title: "Crossfit workout",
            text:"Push your limit",
        },
        {
            imgSrc: "../../../img/box1-2x.jpg",
            title: "New gym apparel",
            text:"Look good, feel good",
        },
        {
            imgSrc: "../../../img/box3-2x.jpg",
            title: "Team training",
            text:"Find a partner",
        }
    ]

    
})