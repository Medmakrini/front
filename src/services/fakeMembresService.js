const members = [

    {name: 'BACHAR Mohamed',
    image: 'bachar.jpg',
    roles: ['Vice Président'],
    description: `Hello there, my name is mohamed, i am a 21 years old engineering student at " L'École Nationale Supérieure d'Arts et Métiers Meknes ", I have been always interested in technology, And now i find myself into Computer Science (Web developement, Data science, AI, Data Analisis...). I am always looking for new fun things to learn and practice, and i find that the GADZ'IT Club is a firendly enviroment to share and get experience with all its intressting members.`,
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  3,
    id: 1,
    media: {instagram:  'https://www.instagram.com/moe.bachar/', linkedin: 'https://www.linkedin.com/in/mohamed-bachar-93590224b/', facebook: null},
    mail: 'bachar.ensam@gmail.com',
    template_id: 'template_ljrk3ji',
    service_id: 'service_1gfhs3y',
    user_id: 'A0j1-FnZhNIt1yZ8y'
    },

    {name: 'ZARKANE Issam',
    roles: ['Président'],
    description: `ZARKANE Issam fourth year engineering student in ENSAM Mekenes, I had always intrest in mathematics, logic and basically how everything works, I'm also into IT and computer science.`,
    image:'issam.jpeg',
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  4,
    id: 2,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'issamizarkane@gmail.com',
    template_id: 'template_pzd24a8',
    service_id: 'service_t0si8fv',
    user_id: 'QgnYG_iMVSwZYH3YQ'

    },

    {name: 'EL MAKRINI Mohammed',
    roles: ['Vice Président'],
    description: `Mohammed El makrini engineering student armed with a technical and entrepreneurial skill and full stack developer , able to integrate quickly into multidisciplinary and multicultural teams, and know how to communicate and take responsibilities, I am young but motivated and interested in data science and evrything related to development , my experience working with clients and development 
    to produce requirements as well as analyze and facilitate their implementation has allowed
    me to see the bigger picture when it comes to the development process.`,
    image:'makrini.jpg',
    commiteMembre: true,
    cellule: {_id : '1', name: 'formation'},
    year:  3,
    id: 3,
    media: {facebook: null, instagram: 'https://www.instagram.com/med_makrini', linkedin:  'https://www.linkedin.com/in/medmakrini/'},
    mail: 'hianamohamed1@gmail.com',
    template_id: 'template_qtg7bgo',
    service_id: 'service_t0si8fv',
    user_id: 'QgnYG_iMVSwZYH3YQ'
    },

    {name: 'IBTIHAL Boukhsimi',
    roles: ['Secrétaire'],
    description: `I am Ibtihal Boukhsimi, second year engineering student. I like doing activities beside my studies and passioned by anything related with computers and robots , here at Ensam I could mix both . Now, I am the secretary at the club  Gadz-IT, and member of other clubs like the robotics club and mechanical club .I really advise the new students to join us and attend the extra classes the club gives because it will improve their skills and give them the opportunity to show up.`,
    image:'ibtihal.jpeg',
    commiteMembre: true,
    cellule: {_id : '2', name: 'media'},
    year:  2,
    id: 4,
    media: {facebook: null, instagram: null, linkedin: 'https://www.linkedin.com/in/ibtihal-boukhsimi-0ba814238'},
    mail: 'Ib.boukhsimi@gmail.com',
    template_id: 'template_utjnopo',
    service_id: 'service_pfqfh7m',
    user_id: 'aixpAnxACkP6H39Nh'
    },

    {name: 'YAHIAOUI Akram',
    roles: ['Chef cellule media'],
    description: `Akram yahyaoui engineering student and a Designer, I've always had a love for technology and design from a young age. When the opportunity to pivot to a career in the tech industry presented itself, I didn't hesitate to seize the moment. Now i am the chef of media cell at gadz club - ensam meknes, Join us and attend the additional lessons related to programing offered by the club as as well as the ui ux design course offered by me and the team`,
    image:'akram.jpeg',
    commiteMembre: true,
    cellule: {_id : '3', name: 'media'},
    year:  2,
    id: 5,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'Akramyahiaoui2002@gmail.com',
    template_id: 'template_e6emt6k',
    service_id: 'service_pfqfh7m',
    user_id: 'aixpAnxACkP6H39Nh',
    },

    {name: 'AMINE Elhend',
    roles: ['Chef cellule event'],
    description: `I'm Amine, engineering student at ENSAM Mèknes, and chef event of Gadz'IT, a coder, cat lover, designer and an old member of the best club ever Gadz'IT.`,
    image:'https://www.renderhub.com/3dseller/ice-age-character-sid/ice-age-character-sid-01.jpg',
    commiteMembre: true,
    cellule: {_id : '2', name: 'media'},
    year:  2,
    id: 6,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'amine.elhend@gmail.com',
    template_id: 'template_o7hj5ns',
    service_id: 'service_x1u1sos',
    user_id: '05SMpi07pUqGBLx-4'
    },

    {name: 'EL FIRQI Jalaleddin',
    roles: ['Chef cellule contact & sponsoring'],
    description: `Hi there, i'm a student at ENSAM and im an active member of GADZ'IT club.`,
    image:'jalaldin.jpeg',
    commiteMembre: true,
    cellule: {_id : '4', name: 'contact'},
    year:  3,
    id: 7,
    media: {facebook: null, instagram: null, linkedin: null},
    mail: 'contact.gadzit@gmail.com',
    template_id: 'template_qkrcrxs',
    service_id: 'service_1gfhs3y',
    user_id: 'A0j1-FnZhNIt1yZ8y',
    },

    
    

]

export function getMembers(){
    return members;
}


