import React from 'react'
import { SvgXml  , SvgCss} from "react-native-svg";


const SvgScisorFilter = (props) =>{

    const svg = `
    
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 24.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
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
    <g id="haircut" transform="translate(0.475 0.423)">
        <path id="Path" class="st1" d="M15.3,8c0.9-1.8,1.9-3.5,3-5.1c1.6-2.2,2.5-2.1,3.3-2.2l-6.9,11.5c-0.1,0.1-0.1,0.3,0,0.5
            c0.8,1.4,0.8,3.1-0.1,4.5c-0.3-0.1-0.7-0.2-1-0.3c0.6-1.4,0.6-3.1,0-4.5l0-0.1c-0.1-0.2-0.1-0.4-0.1-0.7c0.2-0.2,0.3-0.5,0.5-0.7
            c0,0,0,0,0,0c0,0,0,0,0,0C14.3,9.9,14.8,9,15.3,8z"/>
        <path id="Shape" class="st14" d="M11.6,22.1c-0.4,0-0.9-0.1-1.2-0.4c-0.5-0.3-0.9-0.8-1-1.4c-0.1-0.6,0-1.2,0.3-1.7
            c0.4-0.7,1.1-1,1.9-1c0.4,0,0.9,0.1,1.2,0.4c0.5,0.3,0.9,0.9,1,1.5c0.1,0.6,0,1.2-0.3,1.7C13.1,21.7,12.4,22.1,11.6,22.1z
             M11.6,18.3c-0.5,0-1,0.3-1.3,0.7c-0.4,0.7-0.2,1.7,0.5,2.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,1-0.3,1.3-0.7c0.2-0.3,0.3-0.8,0.2-1.2
            c-0.1-0.4-0.3-0.7-0.7-1C12.2,18.3,11.9,18.3,11.6,18.3L11.6,18.3z"/>
        <path id="Shape-2_1_" class="st14" d="M11.7,23.6L11.7,23.6c-0.2,0-0.5,0-0.7-0.1c-2.1-0.4-3.5-2.4-3.1-4.5c0.3-1.5,1.4-2.7,3-3.1
            c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.6-1.1,0.6-2.5,0.1-3.6c-0.5-0.2-1.1-0.3-1.6-0.3c-0.6,0-1.1,0.1-1.6,0.4
            c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3c-0.4,1.7-2,3-3.7,3c-0.3,0-0.5,0-0.8-0.1l-0.1,0c-1-0.2-1.8-0.9-2.3-1.7
            c-0.5-0.9-0.7-1.9-0.5-2.9C1,9.7,2.2,8.6,3.7,8.3c0.2,0,0.4,0,0.6,0c1.3,0,2.5,0.6,3.2,1.7c0.7-0.4,1.4-0.6,2.2-0.6
            c0.7,0,1.4,0.2,2.1,0.5c0.3-0.6,0.7-1.3,1.1-2.1c0.7-1.6,1.5-3.1,2.4-4.6c1.5-2.4,3-2.7,3.7-2.7c0.2,0,0.4,0,0.6,0.1
            c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2,0,0.3l-3.3,5.4l-0.9,1.8l1.8-1.1l5.5-3.2C23,4.1,23,4.1,23.1,4.1c0,0,0.1,0,0.1,0
            c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.8,2.1-2.7,4.3c-1.3,0.8-2.6,1.5-4,2.1c-1,0.4-1.9,0.9-2.8,1.4c0.7,1.4,0.6,3-0.2,4.4c0,0,0,0,0,0
            c0,0,0,0,0,0c1.5,1,2.2,3,1.5,4.7C14.7,22.7,13.3,23.6,11.7,23.6L11.7,23.6z M11.6,16.7c-1.7,0-3.1,1.4-3.1,3.1
            c0,1.7,1.4,3.1,3.1,3.1c1,0,2-0.5,2.6-1.4c0.4-0.7,0.6-1.6,0.4-2.4c-0.2-0.8-0.6-1.4-1.3-1.9C12.8,16.9,12.2,16.7,11.6,16.7z
             M18.9,1.3c-0.7,0.1-1.7,0.5-2.9,2.4c-0.9,1.4-1.7,2.9-2.4,4.5c-0.4,0.8-0.8,1.6-1.2,2.4l0,0c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3
            s-0.1,0.2-0.2,0.3c0,0.2,0.1,0.4,0.1,0.6l0,0.1c0.5,1.3,0.5,2.7,0,3.9c0.3,0,0.5,0.1,0.8,0.2c0.7-1.2,0.8-2.7,0.1-3.9
            c0-0.1,0-0.3,0-0.4l2.9-5.6L18.9,1.3z M4.3,9C3.7,9,3.2,9.2,2.7,9.5c-1.4,0.9-1.9,2.7-1.1,4.1c0.8,1.4,2.7,2,4.1,1.2
            c1.5-0.8,2.1-2.6,1.3-4.1C7,10.6,7,10.6,6.9,10.5C6.4,9.5,5.4,9,4.3,9z M9.8,10.2c-0.7,0-1.3,0.2-1.9,0.5C8,11,8.1,11.3,8.1,11.6
            l0,0c0.5-0.2,1.1-0.3,1.7-0.3c0.4,0,0.9,0.1,1.3,0.2c0-0.2,0-0.4,0.1-0.5c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0.1-0.1
            C10.9,10.4,10.4,10.2,9.8,10.2z M22.8,5.1L17.8,8l-2.9,1.8l-0.6,1.2c0.6-0.4,1.3-0.7,2-1l0,0c1.4-0.6,2.7-1.2,4-2
            C21.8,7,22.6,6.1,22.8,5.1L22.8,5.1z"/>
        <path id="Shape-3_1_" class="st14" d="M4.3,14.4c-1.3,0-2.3-1-2.3-2.3c0-0.8,0.4-1.5,1.1-1.9c0.3-0.2,0.7-0.3,1.1-0.3
            c0.5,0,1.1,0.2,1.5,0.5c0.8,0.6,1.1,1.6,0.7,2.5C6.2,13.8,5.3,14.4,4.3,14.4z M4.3,10.6c-0.3,0-0.6,0.1-0.8,0.2
            c-0.3,0.2-0.6,0.6-0.7,0.9c-0.1,0.4,0,0.8,0.2,1.2c0.3,0.5,0.8,0.7,1.3,0.7c0.1,0,0.2,0,0.2,0c0.6-0.1,1.1-0.6,1.2-1.2
            c0.1-0.6-0.1-1.2-0.6-1.6C5,10.7,4.6,10.6,4.3,10.6z"/>
        <circle id="Oval" class="st14" cx="19.1" cy="21.1" r="0.4"/>
        <circle id="Oval-2" class="st14" cx="3.9" cy="20.4" r="0.4"/>
        <circle id="Oval-3" class="st14" cx="12.1" cy="1.5" r="0.4"/>
        <circle id="Oval-4" class="st14" cx="7.7" cy="6.5" r="0.4"/>
        <path id="Path-2" class="st14" d="M21.6,11.9c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c-0.3,0-0.5,0.2-0.5,0.5
            c0,0.3,0.2,0.5,0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0.3,0,0.5-0.2,0.5-0.5C22.1,12.2,21.9,11.9,21.6,11.9
            C21.6,11.9,21.6,11.9,21.6,11.9z"/>
        <path id="Path-3" class="st14" d="M2.7,1.2c0-0.3-0.2-0.5-0.5-0.5C2,0.7,1.8,0.9,1.7,1.2c-0.3,0-0.5,0.2-0.5,0.5
            c0,0.3,0.2,0.5,0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0.3,0,0.5-0.2,0.5-0.5C3.1,1.4,2.9,1.2,2.7,1.2z"/>
    </g>
    </svg>
    
    
    `

    const ScisorFilter = () => <SvgCss xml={svg} width='100%' height='100%' />
    return <ScisorFilter/>
}

export default SvgScisorFilter;