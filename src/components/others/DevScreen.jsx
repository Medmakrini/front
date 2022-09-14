import React, {useState} from 'react';
import { useEffect } from 'react';
import { getMembers } from '../../services/fakeMembresService';
import CommitteeMember from '../committee/CommitteeMember';
import './devScreen.scss';

const FRONT_ID = 1;
const BACK_ID = 3;

function DevScreen({isOpen}) {
    const devs = [
        {name: 'BACHAR Mohamed',
        image: 'bachar.jpg',
        roles: ['front-end'],
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
        {name: 'EL MAKRINI Mohammed',
        roles: ['Back-end'],
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
        }

    ]

   
    
    

    return (
        <>
            {isOpen && <div className='dev-screen'>
                <CommitteeMember member={devs[0]} />
                <CommitteeMember member={devs[1]} />
            </div>}
        </>
    );
}

export default DevScreen;