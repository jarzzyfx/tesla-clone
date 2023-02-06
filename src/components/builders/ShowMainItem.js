import React from 'react';
import './ShowMainItem.css';

function ShowMainItem({title, img, text, custom, existing}) {
  return (
     <div className="main_item">
                <img src={img} alt={title} className="mainItem_bg" />
              <div className="text">
                    <h1>{title}</h1>
                {text ? <p>{text}</p> : ""}
              </div>
                <div className="buttons">
                   {custom ? <button type="button" className="btn custom">{custom}</button> : "" }
                   {existing ?  <button type="button" className="btn existing">{existing}</button> : "" }
                </div>
            </div>
  )
}

export default ShowMainItem