export default function BoatSVG({details}:
    {details:{roof:string,wheelhouse:string,gunwale:string,hull:string,antifoul:string,pln:string,PLNScheme:string}}){
        let plnBackgroundColour='';
        let plnTextColour='';
        switch(details.PLNScheme){
            case 'WhiteOnBlack':
                plnBackgroundColour='#222';
                plnTextColour='#ddd';
                break;
            case 'BlackOnWhite':
                plnBackgroundColour='#ddd';
                plnTextColour='#222';
                break;
            case 'Black':
                plnBackgroundColour='rgba(0,0,0,0)';
                plnTextColour='#222';
                break;
            case 'White':
                plnBackgroundColour='rgba(0,0,0,0)';
                plnTextColour='#ddd';
                break;
            case 'None':
                plnBackgroundColour='rgba(0,0,0,0)';
                plnTextColour='rgba(0,0,0,0)';
                break;
        }
    return(
        <div className="boat-container">
        <svg id="twinseas" viewBox="48.5 96.216 268.7 123.784">
            {/*Wheel House*/}
            <path id="wheelhouse" d="M 88 100 L 149 100 L 149 155 L 93 155 L 93 127 L 88 100 Z" fill={details.wheelhouse}></path>
            <path id="wheelhouseRoof" d="M 149 100 l 5,0 0,-4, -67,0 -4,4" fill={details.roof}></path>
            <path d="M 90 127 l 59 0" stroke="#000"strokeOpacity="0.1"></path>
  
            {/*Windows*/}
            <path d="M 88.5 102.5 q 0 -1 1 -1 l 0.7,0 q 1 0 1 1 l 4,21 q 0 1 -1 1 l -0.7,0 q -1 0 -1 -1 Z" stroke="#222" fill="#AAA"></path>
            <path d="M 121 102.5 q 0 -1 1 -1 l 20,0 q 1 0 1 1 l 0,21 q 0 1 -1 1 l -20,0 q -1 0 -1 -1 Z" stroke="#222" fill="#AAA"></path>
            <path d="M 94.5 102.5 q 0 -1 1 -1 l 22,0 q 1 0 1 1 l 0,21 q 0 1 -1 1 l -18,0 q -1 0 -1 -1 Z" stroke="#222" fill="#AAA"></path>
  
            {/*Gunwale*/}
            <path id="gunwale" d="M 50 136 L 50 135 L 54 129.5 L 65 126 L 93 126 C 100.333 136 107.667 142 115 144 C 129.667 149.333 144.333 152.667 159 154 L 305 154 C 305.467 154 305.77 154.175 306 154.5 L 308 157.125 L 308.654 157.997 C 308.863 158.285 308.959 158.461 308.954 159.372 L 308.995 160.816 C 308.995 161.283 308.944 161.41 308.611 161.61 L 299.964 165.534 L 192.5 165.7 C 171.833 165.7 145.167 159.033 112.5 145.7 C 91.167 139.033 70.167 135.7 49.5 135.7" fill={details.gunwale}></path>
  
            {/*D Tube*/}
            <path d="M 50 137 q 32 0 63 10 q 49 20 80 20 l 107 0" stroke="#222" strokeWidth="3" fill="none"></path>
            <circle cx="50" cy="137" r="1.5" fill="#222"></circle>
  
            {/*Hull*/}
            <path id="hull" d="M 316.234 196 L 136 196 C 119.333 196 103 192.667 87 186 L 67 175.5 L 51 138.5 C 72.333 138.5 93.333 141.833 114 148.5 C 146.667 161.833 173.333 168.5 194 168.5 L 300 168.5 L 310 188.5 L 316.2 188.5 C 316.867 188.5 317.2 188.833 317.2 189.5 L 316.234 196 Z" fill={details.hull}></path>
            <path d="M 80 173 q 30 19 90 19 l 146.7 0" stroke="#000" strokeWidth="0.5" strokeOpacity="0.2" fill="none"></path>
  
            {/*Antifouled*/}
            <path id="antifoul" d="M 314 213 L 270 213 L 270 215 L 216 215 L 210 220 L 120 220 C 93.333 216.667 76 202 68 176 L 88 186 C 104.667 192.667 121.333 196 138 196 L 316.234 196 L 314 213 Z" fill={details.antifoul}></path>
            <path d="M 314 213 l -149,0 q -44 0 -73 -20 l -16 -12" stroke="#FFF" strokeWidth="0.3" strokeOpacity="0.2" fill="none"></path>
            <path d="M 160 215 q -53 0 -74 -20" stroke="#FFF" strokeWidth="0.3" strokeOpacity="0.2" fill="none"></path>
            <path d="M 160 218 q -50 0 -68 -15" stroke="#FFF" strokeWidth="0.3" strokeOpacity="0.2" fill="none"></path>
  
  
            {/*PLN*/}
            <rect id="bowPLN" transform="rotate(7,46.5,140.7) skewX(7) skewY(5)" x="46.5" y="138.7" width={(details.pln.length*(31/4)+3).toString()} height="12" fill={plnBackgroundColour}/>
            <text id="bowPLNText" transform="rotate(7,46.5,140.7) skewX(7) skewY(5)" style={{whiteSpace: 'pre',fontWeight:'1000',fontSize:'0.7em',fontFamily:'sans-serif'}} x="48" y="149" fill={plnTextColour}>{details.pln}</text>
  
            {/*Scuppers*/}
            <rect x="176" y="187" width="8" height="2" rx="1" ry="1" fill="#222"></rect>
            <rect x="260" y="187" width="8" height="2" rx="1" ry="1" fill="#222"></rect>

            {/*Stern PLN*/}
            <rect id="sternPLN" x={(285.5-(details.pln.length*(37/4)+4)).toString()} y="171" width={(details.pln.length*(37/4)+4).toString()} height="13" fill={plnBackgroundColour}></rect>
            <text id="sternPLNText" x={(288-(details.pln.length*(37/4)+4)).toString()} y="182" fill={plnTextColour} style={{whiteSpace: 'pre',fontFamily:'sans-serif',fontWeight:'1000',fontSize:'0.8em'}}>{details.pln}</text>
  
        </svg>
        </div>
    )
}