import React from 'react';
import './Footer.css'

function Footer() {

    const footerComponent = (title) => {
    return (
        <div className="footer_item">
            <a href="#">{title}</a>
        </div>
    )

}

  return (
    <div className="footer">
        <div className="footer_container">
            {footerComponent('Tesla © 2022')}
            {footerComponent('Privacy & Legal')}
            {footerComponent('Vehicle Recalls')}
            {footerComponent('Contact')}
            {footerComponent('Careers')}
            {footerComponent('News')}
            {footerComponent('Engage')}
            {footerComponent('Locations')}
        </div>
    </div>
  )
}

export default Footer