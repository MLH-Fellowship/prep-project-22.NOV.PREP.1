import React from 'react'
import "../../assets/Styles/carryitemsforplace.css"
import Boots from "../../assets/images/boots.png";
import Cap from "../../assets/images/cap.png";
import Jacket from "../../assets/images/jacket.png";
import Mittens from "../../assets/images/mittens.png";
import Raincoat from "../../assets/images/raincoat.png";
import SunGlasses from "../../assets/images/sunglasses.png";
import SunScreen from "../../assets/images/sunscreen.png";
import Torch from "../../assets/images/torch.png";
import Umbrella from "../../assets/images/umbrella.png";
import WinterHat from "../../assets/images/winter-hat.png";
import WinterScarf from "../../assets/images/winter-scarf.png";
const Carryitems = ({ weatherKind,results}) => {
  const requiredItems = x => {
    if (x === "Rain") return [Raincoat, Umbrella,Boots];
    if (x === "Snow") return [WinterHat, WinterScarf, Jacket];
    if (x === "clear") return [Cap, SunScreen, SunGlasses];
    if (x === "Clouds") return [Umbrella, Cap];
    if (x === "Tornado") return [Torch, SunGlasses,Boots];
    if (x === "Drizzle") return [Raincoat, Umbrella,Boots];
    if (x === "Thunderstorm") return [Raincoat,Torch,Boots];
    if (x === "Mist") return [Torch,Mittens];
    if (x === "Squall") return [Torch, SunGlasses,Boots];
    if (x === "Dust") return [Torch, SunGlasses,Boots];
    if (x === "Ash") return [Torch, SunGlasses,Boots];
    if (x === "Sand") return [Umbrella, SunGlasses,Boots];
    if (x === "Fog") return [Torch, SunGlasses,Boots];
    if (x === "Smoke") return [Torch, SunGlasses,Boots];
    if (x === "Haze") return [Torch, SunGlasses,Boots];
    else return undefined;
  };
  return (
    <>
    <div className="items-outer">
      <h3>Carry the below items!</h3>
      <div className="items-inner">
        {requiredItems(weatherKind) === undefined ? (
          <alert>Error:You have entered wrong location!</alert>
        ) : (
          requiredItems(weatherKind).map((ele, index) => {
            return (
              <div key={index} className="items-card">
                <img src={ele} alt="required item" />
              </div>
            );
          })
        )}
      </div>
    </div>
    </>
)    }

export default Carryitems;
