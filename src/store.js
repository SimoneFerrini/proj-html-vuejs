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

    
})