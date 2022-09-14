const blogs =[

    {id:'1',
     title:'This is Prêta',
     subHeading: `C'est une application de multiples fonctionnalités avec un simple clique`,
     image:'blog1.jpeg',
     content:`Prêta est une création d'un élève ingénieur art et métier dédié aux ensamiens pour les satisfaire un besoin nécessaire, c'est le fait de trouver un loyer convenable d'une manière qui s'adapte avec notre génération digitale, tous simplement c'est une application de multiples fonctionnalités avec un simple clique sans se déplacer à Meknès ils peuvent  voir toutes les maisons disponibles dans la région souhaitée à l'aide d'une carte géographique  avec la possibilitéla possibilités de parler avec l'offreur grâce aux chatbot de Preta qui va optimiser d'un seul coup le temps et les dépenses pour trouver un logement convenable, 
     Certe Preta c'est un cadeau précieux mais gratuit pour n'apporte quelle appareil fixe tel que ordinateur sous forme d'un application web ou mobile  valable aux  deux fameux  systèmes android et ios ,il suffit de l'installer de chez play store ou app store pour en profiter de son service `,
     likes: 34,
     publishDate: new Date(2022, 7, 14),
     tags: [],
     writer:'MAKRINI Mohamed'
    },

    {id:'2',
     title:'AMPCII',
     subHeading: 'une compétition dédiée aux gens passionnés par la programmation',
     image:'blog3.png',
     content:`L'AMPCII, est une compétition organisée le 23 Mai 2022 par Gadz-it . Après ses participations nombreuses, remarquables et réussies le club prend son relève et organise  une compétition dédiée aux gens passionnés par la programmation qui cherchent  à affirmer leurs compétences  et aux novices au monde de la programmation compétitive . Cette compétition a reconnu la participation des étudiants ainsi que des élèves du lycée passionnés par le domaine. Dans l’AMPCII, les équipes participantes devaient résoudre le maximum de problèmes de différents degrés de difficultés en un temps bien précis d’1H30min . La cérémonie de clôture de cette compétition était une occasion pour distribuer les certificats de participation ainsi pour honorer les gagnants en leur offrant des trophées et des sommes d’argent assez importantes afin de les encourager.`,
     likes: 14,
     publishDate: new Date(2022, 6, 14), 
     tags: [],
     writer:'OMARI Laila' 
    },

    {id:'3',
     title:'Club GADZ IT',
     subHeading: `Gadz'Arts Information Technology`,
     image:'blog2.jpg',
     content:`Le club GADZ IT (Gadz'Arts Information Technology), fondé en 2005, a pour but de rapporter un appui à la formation classique offerte par l'école. Sous le slogan "Solve, Code, Optimize, Repeat", le club rassemble des personnes qui s’intéressent aux techniques et à la pratique de l’informatique et qui partagent leurs connaissances.
     GADZ IT offre aux étudiants de l'ENSAM des formations diverses liées au programme universitaire (Langage C, Java, Python …), en plus d’organiser des ateliers en développement des sites web, des applications et autres . . .
     Les membres Participent souvent dans des compétitions de programmation et représentent notre école avec fierté à l'échelle nationale et internationale.`,
     likes: 4,
     publishDate: new Date(2022, 9, 11),
     tags: [],
     writer:'OMARI Laila'  
    },

    {id:'4',
     title:'BPC',
     subHeading: 'la 1ère édition de la compétition nationale BPC',
     image:'blog4.jpg',
     content:`Ce weekend avait eu lieu l'organisation de la 1ère édition de la compétition nationale BPC, initiée par l'université Polytechnique à Benguerir
     À cet égard, le club Gadz'it a l'immense joie de féliciter ses membres qui ont remporté le deuxième prix de cette compétition 🎉 et ont été classé parmi les TOP 10 des 100 participants 🎉💙 _0.75_pc_
     Cet évenement était une occasion pour notre équipe à démontrer ses meilleures performances dans le cadre du défi grâce à sa contribution et énergie fournies.
     Nous tenons à remercier également tous les organisateurs qui ont coopéré au succès de cet événement`,
     likes: 24,
     publishDate: new Date(2021, 7, 14), 
     tags: [],
     writer:'BACHAR Mohamed' 
    }

    
];


export function getBlogs(){
    return blogs;
}

