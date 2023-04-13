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
            imgSrc: "/img/service6-2x.jpg",
            title: "Crossfit workout",
            text:"Push your limit",
        },
        {
            imgSrc: "/img/box1-2x.jpg",
            title: "New gym apparel",
            text:"Look good, feel good",
        },
        {
            imgSrc: "/img/box3-2x.jpg",
            title: "Team training",
            text:"Find a partner",
        }
    ],

    //section two, card list----------------------
    secTwoCards:[
        {
            imgSrc:'/img/video2-2x.jpg',
            title:'Thighs & glute workout',
            text:'Increase your mobility',
        },
        {
            imgSrc:'/img/video7-2x.jpg',
            title:'Lift, firm & perk up',
            text:'Feel young again',
        },
        {
            imgSrc:'/img/video9-2x.jpg',
            title:'Slim & trim your waist',
            text:'Shed those extra pounds',
        }
    ],

    //section four, card list ----------------------------------
    secFourCards:[
        {
            icon:'fa-solid fa-heart',
            title:'Team training',
            subtitle:'Find a partner',
            text:'Vestibulum, curabitur eu semn nibh ultrices sit nulla adisciping. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link:'Find a partner',
        },
        {
            icon:'fa-solid fa-dumbbell',
            title:'Crossfit workout',
            subtitle:'Push your limits',
            text:'Vestibulum, curabitur eu semn nibh ultrices sit nulla adisciping. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link:'Learn about Crossfit',
        },
        {
            icon:'fa-sharp fa-solid fa-fire-flame-curved',
            title:'Weight loss plan',
            subtitle:'Shed those pounds',
            text:'Vestibulum, curabitur eu semn nibh ultrices sit nulla adisciping. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.',
            link:'Schedule a workout',
        }
    ],

    //section Five, card list-----------------------------------------
    secFiveCards:[
        {
            imgSrc: '/img/blog4-2x.jpg',
            title: 'The best protein shake',
            text: 'By admin | November 26th, 2019 | Gym',
        },
        {
            imgSrc: '/img/blog1-2x.jpg',
            title: 'Ultimate cardio workout',
            text: 'By admin | November 26th, 2019 | Gym',
        },
        {
            imgSrc: '/img/blog3-2x.jpg',
            title: 'New juices available now',
            text: 'By admin | November 26th, 2019 | Gym',
        }
    ],
    
    //section Seven, card list-----------------------------------------
    secSevenCards:[
        {
            imgSrc: '/img/sponsor-1-2x.png',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil, voluptatibus aspernatur harum tenetur quo earum illo dolore unde maxime.',
            link: 'Visit Yoga Studio',
        },
        {
            imgSrc: '/img/sponsor-2-2x.png',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil, voluptatibus aspernatur harum tenetur quo earum illo dolore unde maxime.',
            link: 'Join Fitness Center',
        },
        {
            imgSrc: '/img/sponsor-3-2x.png',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil, voluptatibus aspernatur harum tenetur quo earum illo dolore unde maxime.',
            link: 'Learn about FC',
        },
        {
            imgSrc: '/img/sponsor-4-2x.png',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nihil, voluptatibus aspernatur harum tenetur quo earum illo dolore unde maxime.',
            link: 'Visit Power Gym',
        }
    ],


    //Footer-----------------------------------------------------------
    iconSocial:[
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-youtube",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin-in",
    ],

    recentPosts:[
        "The best protein shake",
        "Ultimate cardio workout",
        "New juices available now",
        "Tips to find training partners",
        "20 best healty recipes",
    ],

    footerContact:{
        location: '4748 Tipple Road Michigan 48449',
        mobile: '1.800.000.0000',
        email: 'info@your-company.com',
    }
})