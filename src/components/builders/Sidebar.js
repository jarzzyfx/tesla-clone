import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({barlinks, isopen, handleclick}) => {

    console.log(isopen);
    
    return (
            <div className={isopen ? "sidebar open" : "sidebar"}>

                <div className="cancel">
                    <button type="button" onClick={handleclick} className="cancel-btn">x</button>
                </div>

                <div className="dynamic-nav"></div>


                <div className="static-nav">
                    <Link className="link res" to="#">Model S</Link>
                    <Link className="link res" to="#">Model 3</Link>
                    <Link className="link res" to="#">Model X</Link>
                    <Link className="link res" to="#">Model Y</Link>
                    <Link className="link res" to="#">Model S</Link>
                    <Link className="link res" to="#">Solar Roof</Link>
                    <Link className="link res" to="#">Solar Panels</Link>
                    {
                barlinks.map(barlink => {
                    return <Link className="link" to={barlink.link}>{barlink.linkname}</Link>
                })
                }
                </div>
            </div>
        )
    }

export default Sidebar