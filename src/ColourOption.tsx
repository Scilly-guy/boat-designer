export default function ColourOption(colour:{name:string,cssVal:string,id:number}){
    return <option value={`${colour.cssVal}`} key={colour.id} style={{background:colour.cssVal}}>{colour.name}</option>
  }