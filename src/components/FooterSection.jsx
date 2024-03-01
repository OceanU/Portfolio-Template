// Header.jsx
import React from 'react';
import './footerSection.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const FooterSection = () => {
    return (

        <div className="footer">
            <div className='arrow-up'>
                <KeyboardArrowUpIcon fontSize="large" />
            </div>
            <div className='social-media-icons'>
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <GitHubIcon fontSize="large" />
            </div>
            <hr />
            <div className='details'>
                <p>Other contact details. </p>
                <p>✆ +073930332827393</p>
                <p>Alternative Email/ Other Detail</p>
            </div>

        </div>

    );
};

export default FooterSection;