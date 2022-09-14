import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import './footer.scss';
import DevScreen from '../others/DevScreen';

function Footer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <footer className='footer'>
            <div className='footer__slogan'>
                <div className='footer__slogan__logo-holder'>
                    <img src={logo} />
                    <div className='footer__slogan__logo-holder__gadz-it'>
                        Gadz ' IT
                    </div>
                </div>
                <div className='footer__slogan__text'>
                    <div> Solve Code Optimize</div>
                    <div> And always REPEAT</div>
                </div>
            </div>
            <div className='footer__navigation'>
                <a href='#home'>Home</a>
                <a href='#courses'>Courses</a>
                <a href='#blogs'>Blogs</a>
                <a href='#contact-us'>Contact</a>
            </div>
            <div className='footer__media'>
                <a href='https://www.facebook.com/ClubInformatiqueArtsMetiers' target="_blank"><img src={facebook} className='footer__media__facebook'/></a>
                <a href='https://www.instagram.com/gadz.it/' target="_blank"><img src={instagram} className='footer__media__instagram'/></a>
                <a href='https://www.youtube.com/channel/UCFnyUE8WoNdBnonSBCVGzRA/videos' target='_blank'><img src={youtube} className='footer__media__youtube'/></a>
            </div>
            <div className='footer__copyright'>© Copyright 2022 gadz IT <div><a onClick={togglePopup}>Dev Team</a></div></div>
            <DevScreen isOpen={isOpen}/>
        </footer>
    );
}

export default Footer;