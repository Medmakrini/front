import React from 'react';
import { ToastContainer } from 'react-toastify';
import Club from '../components/club/Club';
import Committee from '../components/committee/Committee';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/Footer';
import BlurEclipse from '../components/header/BlurEclipse';
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import NavBar from '../components/navBar/NavBar';
import OurCourses from '../components/ourCourses/OurCourses';
import Posts from '../components/posts/Posts';
import 'react-toastify/dist/ReactToastify.css';
import LoadingRing from '../components/common/LoadingRing';

function Landing({blogs, members}) {
    let new_members = [...members];
    const temp = new_members[1];
    new_members[1] = new_members[2];
    new_members[2] = temp;  
    
    return (
        <>
            <ToastContainer />
            <BlurEclipse />
            <NavBar />
            <Header />
            <Club />
            <OurCourses />
            <Posts blogs={blogs}/>
            <Members members={new_members}/>
            <Committee committeeMembers={members.filter(member => member.commiteMembre)}/>
            <ContactUs />
            <Footer />
        </>
    );
}

export default Landing;