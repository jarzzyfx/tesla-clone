import React from 'react'

const CarModel = ({modelName, modelImg, modelPrice, savingPrice, deliveryDate, modelSpecs, modelDetails}) => {
  return (
    <div className="carmodel">
      <section className="image-section">
        <img src={modelImg} alt="bg_img" title={modelName}/>
        <div className="pricebox">
          {modelPrice ?<span className="currentprice"> {modelPrice}</span> : ""}
          {savingPrice ? <span className="currentprice">{savingPrice}</span> : ""}
        </div>
      </section>

      {/* section separationg */}
      <section className="detail-section">

      </section>
    </div>
  )
}

export default CarModel