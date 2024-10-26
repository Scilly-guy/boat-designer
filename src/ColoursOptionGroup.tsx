import ColourOption from "./ColourOption";
export default function ColoursOptionGroup(optionGroup:{name:string,options:{name:string,cssVal:string,id:number}[],id:number}){
    return (
        <optgroup key={optionGroup.id} label={optionGroup.name} className="Colours-Option-Group">
            {optionGroup.options.map(option=>ColourOption(option))}
        </optgroup>
    )
}