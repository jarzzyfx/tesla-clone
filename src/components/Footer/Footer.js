import React from 'react';
import './Footer.css'
import Footeritem from './FooterItem';

function Footer() {



  return (
    <div className="footer">
        <div className="footer_container">
            <Footeritem title='Tesla © 2022'/>
            <Footeritem title='Privacy & Legal'/>
            <Footeritem title ='Vehicle Recalls'/>
            <Footeritem title='Contact'/>
            <Footeritem title='Careers'/>
            <Footeritem title='News'/>
            <Footeritem title='Engage'/>
            <Footeritem title='Locations'/>
        </div>
    </div>
  )
}

export default Footer