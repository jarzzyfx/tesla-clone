import React from 'react';
import ShowMainItem from '../../components/builders/ShowMainItem';
import './Main.css';

function Main() {

    

  return (
    <div className = "main">

        <ShowMainItem title="Model Y" text="Order Online for Touchless Delivery" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" custom="Custom Order" existing="Existing Inventory"/>
        <ShowMainItem title="Model 3" text="Order Online for Touchless Delivery" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD" custom="Custom Order" existing="Existing Inventory"/>
        <ShowMainItem title="Model S" text="Order Online for Touchless Delivery" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD" custom="Custom Order" existing="Existing Inventory"/>
        <ShowMainItem title="Model X" text="Order Online for Touchless Delivery" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD" custom="Custom Order" existing="Existing Inventory"/>
        <ShowMainItem title="Solar Panels" text="Lowest Cost Solar Panels in America" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D" custom="Order Now" existing="Learn More"/>
        <ShowMainItem title="Solar Roof" text="Produce Clean Energy From Your Roof" img="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D" custom="Order Now" existing="Learn More"/>
        <ShowMainItem title="Accessories"  img="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046" custom="Shop Now"/>

        {/* 
        
        {showcaseItem("Accessories", "", "https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046")} */}
    </div>
  )
}

export default Main