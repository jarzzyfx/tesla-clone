import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css'

const NavComponent = ({modelLink}) => {
  
    return (
        <div className="header_item">
            <Link to={modelLink.link ? modelLink.link :null}>{modelLink.title ? modelLink.title : ""}</Link>
        </div>
    )
    
}

export default NavComponent