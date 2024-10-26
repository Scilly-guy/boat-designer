import BoatSVG from "./BoatSvg";
import { ChangeEvent, useState, useEffect, ChangeEventHandler } from "react";
import { colors } from "./colors";
import ColourPicker from "./ColourPicker";
import { antifoulOptions } from "./antifouls";
import ColourOption from "./ColourOption";
import ColoursOptionGroup from "./ColoursOptionGroup";

export default function BoatDesigner() {
  const [boatDetails, setBoatDetails] = useState({
    roof: "grey",
    wheelhouse: "grey",
    gunwale: "white",
    hull: "gray",
    antifoul: "black",
    pln: "XX99",
    PLNScheme: "WhiteOnBlack",
  });
  function pickColour(picked:string){
    setColours(prev=>({...prev,namedColours:[<option value={picked} key='0'>Colour Picker</option>]}));
  }
  const [colours, setColours]=useState({
    namedColours:[<option value='hsl(180 50% 50%)' key='0'>Colour Picker</option>]
  });

  function handleChange(e:ChangeEvent<HTMLSelectElement|HTMLInputElement>) {
    const { target }=e;
    const { name, value } = (("name" in target) && ("value" in target))?target:{name:'error',value:'error'};
    setBoatDetails((prev) => ({
      ...boatDetails,
      [name]: value,
    }));
  }
  
  let keyNum = 1;
  let colourOptions:{name:string,cssVal:string,id:number}[]=[];
  for (const [key, value] of Object.entries(colors)) {
    colourOptions.push({name:value,cssVal:key,id:keyNum++});
  }

  let antifouls:{name:string,options:{name:string,cssVal:string,id:number}[],id:number}[]=[];
  antifoulOptions.forEach(antifoul=>{
    const indexOfBrand=antifouls.findIndex(e=>e.name===antifoul.brand);
    if(indexOfBrand===-1){
      antifouls.push({
        name:antifoul.brand,
        options:[{name:antifoul.name,cssVal:antifoul.hex,id:keyNum++}],
        id:keyNum++
      });
    }
    else{
      antifouls[indexOfBrand].options.push({name:antifoul.name,cssVal:antifoul.hex,id:keyNum++});
    }
  });

  return (
    <div id="BoatColourPicker" className="flex-row">
      <div id="BoatFormCol">
        <form className="boat-design-form">
          <fieldset id="PLNScheme" className="col-double shadow-border margin-after">
            <legend>Port Letters &amp; Numbers</legend>
            <label htmlFor="PLN" style={{ display: "none" }}>
              PLN
            </label>
            <input
              type="text"
              id="PLN"
              placeholder="PLN"
              name="pln"
              onChange={handleChange}
              value={boatDetails.pln}
            />
            <ul className="no-bullets">
              <li>
                <label htmlFor="BlackOnWhite">Black on White</label>
                <input
                  id="BlackOnWhite"
                  type="radio"
                  name="PLNScheme"
                  value="BlackOnWhite"
                  onChange={handleChange}
                  checked={boatDetails.PLNScheme==="BlackOnWhite"}
                />
              </li>
              <li>
                <label htmlFor="WhiteOnBlack">White on Black</label>
                <input
                  id="WhiteOnBlack"
                  type="radio"
                  name="PLNScheme"
                  value="WhiteOnBlack"
                  onChange={handleChange}
                  checked={boatDetails.PLNScheme==="WhiteOnBlack"}
                />
              </li>
              <li>
                <label htmlFor="White">White</label>
                <input
                  id="White"
                  type="radio"
                  name="PLNScheme"
                  value="White"
                  onChange={handleChange}
                  checked={boatDetails.PLNScheme==="White"}
                />
              </li>
              <li>
                <label htmlFor="Black">Black</label>
                <input
                  id="Black"
                  type="radio"
                  name="PLNScheme"
                  value="Black"
                  onChange={handleChange}
                  checked={boatDetails.PLNScheme==="Black"}
                />
              </li>
              <li>
                <label htmlFor="Black">None</label>
                <input
                  id="Black"
                  type="radio"
                  name="PLNScheme"
                  value="None"
                  onChange={handleChange}
                  checked={boatDetails.PLNScheme==="None"}
                />
              </li>
            </ul>
          </fieldset>

          <label htmlFor="roofColour">Roof Colour</label>
          <select
            id="roofColour"
            name="roof"
            onChange={handleChange}
            value={boatDetails.roof}
          >
            {[...colours.namedColours,...colourOptions.map(colour=>ColourOption(colour))]}
          </select>
          <label htmlFor="superColour">Wheelhouse Colour</label>
          <select
            id="superColour"
            name="wheelhouse"
            onChange={handleChange}
            value={boatDetails.wheelhouse}
          >
          {[...colours.namedColours,...colourOptions.map(colour=>ColourOption(colour))]}
          </select>
          <label htmlFor="gunwaleColour">Gunwale Colour</label>
          <select
            id="gunwaleColour"
            name="gunwale"
            onChange={handleChange}
            value={boatDetails.gunwale}
          >
          {[...colours.namedColours,...colourOptions.map(colour=>ColourOption(colour))]}
          </select>
          <label htmlFor="hullColour">Hull Colour</label>
          <select
            id="hullColour"
            name="hull"
            onChange={handleChange}
            value={boatDetails.hull}
          >
          {[...colours.namedColours,...colourOptions.map(colour=>ColourOption(colour))]}
          </select>
          <label htmlFor="antifoulColour">Antifoul Colour</label>
          <select
            id="antifoulColour"
            name="antifoul"
            onChange={handleChange}
            value={boatDetails.antifoul}
          >
            {antifouls.map(brand=>ColoursOptionGroup(brand))}
          </select>
          <ColourPicker pickColour={pickColour}/>
        </form>
      </div>
      <BoatSVG details={boatDetails} />
    </div>
  );
}
