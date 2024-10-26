import { useState, ChangeEvent } from "react";
export default function ColourPicker({pickColour}:{pickColour:(picked:string)=>void}){
    const [colourValues, setColourValues]=useState({
        hue:180, 
        saturation:50, 
        luminosity:50
    });
    function handleChange(e:ChangeEvent<HTMLInputElement>){
        const{name,value}=e.target;
        setColourValues(prev=>({
            ...prev,
            [name]:value
        }));
        pickColour(`hsl(${colourValues.hue} ${colourValues.saturation}% ${colourValues.luminosity}%)`);
    }
    return(
        <div className="colour-picker col-double shadow-border" id="colour-picker">
            <label htmlFor="colour-picker">Colour Picker</label>
            <div className="flex-row">
                <div className="slider">
                    <label htmlFor="hue">Colour</label><br/>
                    <input
                        type='range'
                        name='hue'
                        id="hue"
                        min='0'
                        max='360'
                        value={colourValues.hue}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider">
                    <label htmlFor="saturation">Intensity</label><br/>
                    <input
                        type='range'
                        name='saturation'
                        id='saturation'
                        min='0'
                        max='100'
                        value={colourValues.saturation}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider">
                    <label htmlFor="luminosity">Brightness</label> <br/>
                    <input
                        type='range'
                        name='luminosity'
                        id='luminosity'
                        min='0'
                        max='100'
                        value={colourValues.luminosity}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="picked-colour" style={{background:`hsl(${colourValues.hue} ${colourValues.saturation}% ${colourValues.luminosity}%)`}}>
                hsl({colourValues.hue+','+colourValues.saturation+','+colourValues.luminosity})
            </div>
        </div>
    )
}