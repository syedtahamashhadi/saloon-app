import React from 'react'
import { SvgXml } from "react-native-svg";


const SvgTransactions = (props) =>{

    const svg = `
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 24.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 13.3 13.3" style="enable-background:new 0 0 13.3 13.3;" xml:space="preserve">
    <style type="text/css">
        .st0{clip-path:url(#SVGID_2_);}
        .st1{fill:#54ECE6;}
        .st2{fill:#FFEBD2;}
        .st3{fill:#FFF3E4;}
        .st4{fill:#49D3CE;}
        .st5{fill:#AE8164;}
        .st6{fill:#A2785D;}
        .st7{fill:#AC8164;}
        .st8{fill:#A47C61;}
        .st9{fill:#333333;}
        .st10{fill:#77A0D4;}
        .st11{fill:none;stroke:#333333;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st12{fill:none;stroke:#333333;stroke-width:1.4;stroke-linejoin:round;stroke-miterlimit:10;}
        .st13{fill:#77A0D4;stroke:#333333;stroke-width:1.4;stroke-linejoin:round;stroke-miterlimit:10;}
        .st14{fill:#1D194D;}
        .st15{clip-path:url(#Mask-2_1_);fill:url(#);stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
        .st16{fill:#1D1B4C;}
        .st17{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
        .st18{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}
        .st19{fill:#221F1F;}
        .st20{fill:#464A51;}
        .st21{fill:#FFFFFF;}
        .st22{fill:#323643;}
        .st23{fill:#32A562;}
        .st24{fill:#1D1C1C;}
        .st25{fill:#0B2031;}
        .st26{opacity:0.2;fill:#4C4B5E;}
        .st27{fill:#1C1C1C;}
        .st28{fill:none;stroke:#1C1C1C;stroke-width:0.13;stroke-miterlimit:10;}
        .st29{fill:#2F2B2B;}
        .st30{fill:none;stroke:#000000;stroke-width:0.13;stroke-miterlimit:10;}
        .st31{fill:#272323;}
        .st32{fill:none;stroke:#1C1C1C;stroke-width:0.33;stroke-miterlimit:10;}
        .st33{fill:#54FEBD;}
        .st34{fill:none;stroke:#1D194D;stroke-width:0.17;stroke-miterlimit:10;}
        .st35{fill:#F0F3F8;}
        .st36{fill:#1B2749;}
        .st37{opacity:0.8745;fill:#49D3CE;}
        .st38{fill:#48D0CB;}
        .st39{fill:none;stroke:#1B2749;stroke-width:3.000000e-02;stroke-miterlimit:10;}
        .st40{fill:#FCD3AC;}
        .st41{fill:#FCBC85;}
        .st42{fill:#3B2519;}
        .st43{fill:#F7945E;}
        .st44{fill:#F9AA8D;}
        .st45{fill:#FA7268;}
        .st46{fill:#35A8A3;}
        .st47{fill:#35A7A3;}
        .st48{opacity:0.302;fill:#F7B500;}
        .st49{fill:#F0D217;}
        .st50{clip-path:url(#SVGID_6_);}
        .st51{clip-path:url(#SVGID_10_);}
        .st52{fill:none;stroke:#1D194D;stroke-width:0.33;stroke-miterlimit:10;}
        .st53{fill:#FDB3CB;}
        .st54{fill:none;stroke:#1D194D;stroke-width:0.67;stroke-miterlimit:10;}
        .st55{fill:#F9596C;}
        .st56{fill:#1F1B4E;}
        .st57{fill:#F1F3F8;}
        .st58{clip-path:url(#SVGID_14_);}
        .st59{clip-path:url(#SVGID_18_);}
        .st60{fill:#06090C;}
        .st61{fill:none;stroke:#000000;stroke-width:0.19;stroke-miterlimit:10;}
        .st62{clip-path:url(#SVGID_22_);}
        .st63{fill:#D4A07F;}
        .st64{fill:#C09478;}
        .st65{fill:#D1A080;}
        .st66{fill:#E0B08F;}
        .st67{fill:#D93939;}
        .st68{fill:none;stroke:#333333;stroke-width:0.67;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st69{fill:none;stroke:#333333;stroke-width:0.67;stroke-linejoin:round;stroke-miterlimit:10;}
        .st70{fill:#3B5998;}
        .st71{fill:#FBBB00;}
        .st72{fill:#518EF8;}
        .st73{fill:#28B446;}
        .st74{fill:#F14336;}
        .st75{fill:#00ACED;}
        .st76{fill:#2C2862;}
        .st77{fill:none;stroke:#49D3CE;stroke-width:0.13;stroke-miterlimit:10;}
        .st78{fill:#D8D8D8;}
        .st79{fill:none;stroke:#FE7289;stroke-width:0.33;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st80{clip-path:url(#SVGID_28_);}
        .st81{clip-path:url(#SVGID_32_);}
        .st82{clip-path:url(#SVGID_36_);}
        .st83{clip-path:url(#SVGID_40_);}
        .st84{clip-path:url(#SVGID_44_);}
        .st85{clip-path:url(#SVGID_48_);}
        .st86{clip-path:url(#SVGID_52_);}
        .st87{clip-path:url(#SVGID_56_);}
        .st88{clip-path:url(#SVGID_60_);}
        .st89{clip-path:url(#SVGID_64_);}
        .st90{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .st91{fill:url(#SVGID_67_);}
        .st92{fill:url(#SVGID_68_);}
        .st93{fill:url(#SVGID_69_);}
        .st94{fill:#475993;}
        .st95{fill:#F61C0D;}
        .st96{opacity:0.149;fill:#FA7268;}
        .st97{opacity:0.149;fill:#00BF4B;}
        .st98{fill:#00BF4B;}
        .st99{fill:#8886A0;}
    </style>
    <path class="st36" d="M10.4,8.8h0.6c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2h-0.6c-0.1,0-0.2,0.1-0.2,0.2
        C10.2,8.7,10.3,8.8,10.4,8.8z"/>
    <path class="st36" d="M12.9,11.1H10v-0.4h1.3c0.1,0,0.2-0.1,0.2-0.2c0-0.5,0.4-0.8,0.8-0.8c0.1,0,0.2-0.1,0.2-0.2V7.7
        c0-0.1-0.1-0.2-0.2-0.2c-0.5,0-0.8-0.4-0.8-0.8c0-0.1-0.1-0.2-0.2-0.2l-7.6,0V6h9.2V11.1z M9.7,6.8h1.4c0.1,0.5,0.5,0.9,1,1v1.5
        c-0.5,0.1-0.9,0.5-1,1H10V7.6C10,7.3,9.9,7,9.7,6.8z M0.4,5.5c0-0.3,0.1-0.5,0.3-0.7C0.8,4.7,1,4.6,1.3,4.5v1.9
        C0.8,6.4,0.4,6,0.4,5.5z M1.7,0.9c0-0.3,0.2-0.5,0.5-0.5h4.4C6.8,0.4,7,0.6,7,0.9v1.8H6.8V1.7c0-0.3-0.2-0.5-0.5-0.5H2.4
        c-0.3,0-0.5,0.2-0.5,0.5v0.7c0,0.1,0.1,0.2,0.2,0.2s0.2-0.1,0.2-0.2V1.7c0-0.1,0.1-0.1,0.1-0.1h3.9c0.1,0,0.1,0.1,0.1,0.1v0.9H5.3
        C4.8,2.6,4.4,3,4.4,3.6v2H3.5c-0.1,0-0.2,0.1-0.2,0.2v0.6H2.2V3C2.2,3,2.1,2.9,2,2.9S1.8,3,1.8,3v3.4H1.7V0.9z M11.5,3.6L11.5,3.6
        l-1.9,0c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2h1.9v0.6H4.8V4.1h4.2C9,4.1,9.1,4,9.1,3.9c0-0.1-0.1-0.2-0.2-0.2H4.8V3.6
        C4.8,3.3,5,3,5.3,3h5.6C11.2,3,11.5,3.3,11.5,3.6z M4.8,5.6V5h6.7v0.6H4.8z M13.1,5.6h-1.3V4.8v-1V3.6c0-0.5-0.4-1-1-1H7.4V0.9
        C7.4,0.4,7,0,6.5,0H2.1C1.7,0,1.3,0.4,1.3,0.9v3.3c-0.3,0-0.6,0.2-0.9,0.4C0.1,4.8,0,5.1,0,5.5V12c0,0.7,0.6,1.3,1.4,1.3h6
        c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2h-6c-0.5,0-1-0.4-1-1V6.4c0.2,0.2,0.6,0.4,1,0.4h7.5c0.4,0,0.8,0.3,0.8,0.8v2.9v0.8v0
        v0.8c0,0.4-0.3,0.8-0.8,0.8H8.1c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.2,0.2h0.8c0.6,0,1.2-0.5,1.2-1.2v-0.6h3.1
        c0.1,0,0.2-0.1,0.2-0.2V5.8C13.3,5.7,13.3,5.6,13.1,5.6z"/>
    <path class="st36" d="M12.1,6.7c0,0.1,0.1,0.1,0.2,0.1s0.2,0,0.2-0.1c0-0.1,0-0.2-0.1-0.2c-0.1,0-0.2,0-0.2,0
        C12.1,6.5,12.1,6.6,12.1,6.7z"/>
    <path class="st36" d="M12.5,10.4c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.2,0.1,0.3,0.3,0.2
        C12.5,10.6,12.5,10.5,12.5,10.4z"/>
    <path class="st36" d="M7.4,9.8c0-0.3,0.2-0.5,0.6-0.5c0.3,0,0.6,0.3,0.6,0.5c0,0.3-0.3,0.6-0.6,0.6C7.6,10.4,7.4,10.1,7.4,9.8z
         M8.9,9.8c0-0.5-0.4-1-0.9-1c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1C8.5,10.8,8.9,10.4,8.9,9.8z"/>
    </svg>
        
    
    `

    const Transactions = () => <SvgXml xml={svg} width='100%' height='100%' fill='#1D194D'/>
    return <Transactions />
}

export default SvgTransactions;