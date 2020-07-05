import React from 'react'
import { SvgXml  , SvgCss} from "react-native-svg";


const SvgTrimerFilter = (props) =>{

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
    <g id="beard_trim_1_" transform="translate(0.632 0.632)">
        <path id="Path-43_1_" class="st1" d="M21,6l-1.3,1.3c-0.4,0.4-1.2,0.4-1.6,0c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.2,0.1-0.3,0.3
            c0,0.1,0,0.3,0.1,0.4c0.4,0.4,0.4,1.1,0,1.5c0,0,0,0,0,0L6.7,19.9c-0.7,0.6-1.6,0.9-2.5,0.8c-1-0.1-1.9-0.4-2.6-1.1
            C1,18.9,0.6,18,0.5,17.1c-0.1-0.9,0.2-1.8,0.9-2.4L12.2,4.2c0.4-0.4,1.2-0.4,1.6,0c0.1,0.1,0.4,0.1,0.5,0c0.1-0.1,0.1-0.4,0-0.5
            c0,0,0,0,0,0c-0.4-0.4-0.4-1.1,0-1.5c0,0,0,0,0,0l1.3-1.3c0.4-0.4,1.2-0.4,1.6,0L21,4.5C21.4,4.9,21.4,5.5,21,6C21,6,21,6,21,6
            L21,6z"/>
        <path id="Shape-9_1_" class="st14" d="M5.3,23.2L5.3,23.2c-1.3,0-2.5-0.5-3.4-1.3c-0.9-0.9-1.4-2-1.4-3.2c0-1,0.4-2,1.1-2.7
            L12.4,5.4c0.4-0.3,0.8-0.5,1.3-0.5c0.1,0,0.2,0,0.3,0c-0.1-0.6,0.1-1.2,0.5-1.6L15.9,2c0.5-0.5,1.3-0.7,2-0.4l0.4-0.4
            c0.1-0.1,0.4-0.1,0.5,0c0.1,0.1,0.1,0.4,0,0.5c0,0,0,0,0,0L18.6,2l0.5,0.5l0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.3
            c0,0.1,0,0.3-0.1,0.4L19.6,3l0.5,0.5l0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.3c0,0.1,0,0.3-0.1,0.4l-0.3,0.3l0.5,0.5
            l0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.2,0.1,0.3,0.3c0,0.1,0,0.3-0.1,0.4l-0.3,0.3l0.5,0.5l0.3-0.3c0.1-0.1,0.2-0.1,0.4-0.1
            c0.1,0,0.2,0.1,0.3,0.3c0,0.1,0,0.3-0.1,0.4l-0.4,0.4c0.3,0.7,0.1,1.5-0.4,2L21,9.6c-0.4,0.3-0.8,0.5-1.3,0.5h0c-0.1,0-0.2,0-0.3,0
            c0.1,0.6-0.1,1.2-0.5,1.6L8,22.2C7.3,22.9,6.3,23.2,5.3,23.2z M13.8,5.6c-0.3,0-0.6,0.1-0.8,0.3L2.1,16.4c-0.6,0.6-1,1.5-0.9,2.4
            c0.1,0.9,0.5,1.8,1.1,2.5C3.1,22,4,22.4,5,22.5c0.1,0,0.2,0,0.3,0c0.8,0,1.6-0.3,2.2-0.9l10.8-10.5c0.4-0.4,0.4-1.1,0-1.5
            c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-0.2,0.3-0.3c0.1,0,0.3,0,0.4,0.1c0.2,0.2,0.5,0.3,0.8,0.3h0
            c0.3,0,0.6-0.1,0.8-0.3l1.3-1.3C22,7.5,22.1,7.3,22.1,7c0-0.3-0.1-0.6-0.3-0.8L18,2.5c-0.2-0.2-0.5-0.3-0.8-0.3h0
            c-0.3,0-0.6,0.1-0.8,0.3l-1.3,1.3c-0.4,0.4-0.4,1.1,0,1.5c0,0,0,0,0,0c0.1,0.1,0.1,0.4,0,0.5c0,0,0,0,0,0c-0.1,0.1-0.4,0.1-0.5,0
            C14.3,5.7,14.1,5.6,13.8,5.6z"/>
        <path id="Path-44_1_" class="st14" d="M17,6.3c-0.2-0.1-0.4-0.1-0.6,0c-0.1,0.2-0.1,0.4,0,0.5L17.5,8c0.2,0.2,0.4,0.2,0.6,0
            c0.2-0.2,0.2-0.4,0-0.6L17,6.3z"/>
        <path id="Path-45_1_" class="st14" d="M17.5,2.5c-0.1-0.1-0.4-0.1-0.5,0S16.9,2.9,17,3l3.7,3.7c0.1,0.2,0.4,0.2,0.5,0
            s0.2-0.4,0-0.5c0,0,0,0,0,0L17.5,2.5z"/>
        <path id="Path-46_1_" class="st14" d="M16.2,11.4L8,19.2c-1,0.9-2.5,0.9-3.5,0c-0.9-0.9-1-2.3-0.1-3.2c0,0,0.1-0.1,0.1-0.1l8.2-7.8
            c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1-0.2-0.2-0.3-0.3c-0.1,0-0.3,0-0.4,0.1L4,15.4c-1.2,1.1-1.3,3-0.1,4.3c0,0,0.1,0.1,0.1,0.1
            c1.3,1.2,3.3,1.2,4.6,0l8.2-7.8c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1-0.2-0.2-0.3-0.3C16.5,11.3,16.3,11.3,16.2,11.4L16.2,11.4z"/>
        <path id="Path-47_1_" class="st14" d="M17.9,17.2c0-0.2-0.1-0.3-0.3-0.3c0,0,0,0,0,0c-0.2,0-0.3,0.1-0.3,0.3
            c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0.2,0,0.3-0.1,0.3-0.3
            C18.2,17.4,18,17.2,17.9,17.2C17.9,17.2,17.9,17.2,17.9,17.2z"/>
        <circle id="Oval-12_1_" class="st14" cx="0.8" cy="2.7" r="0.3"/>
        <circle id="Oval-13_1_" class="st14" cx="2.7" cy="10.3" r="0.3"/>
        <circle id="Oval-14_1_" class="st14" cx="22.3" cy="21.7" r="0.3"/>
        <path id="Path-48_1_" class="st14" d="M5.9,4.6c0-0.2-0.1-0.3-0.3-0.3c0,0,0,0,0,0c-0.2,0-0.3,0.1-0.3,0.3c-0.2,0-0.3,0.1-0.3,0.3
            c0,0.2,0.1,0.3,0.3,0.3c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0.2,0,0.3-0.1,0.3-0.3C6.2,4.7,6,4.6,5.9,4.6
            C5.9,4.6,5.9,4.6,5.9,4.6z"/>
    </g>
    </svg>
    
    
    
    `

    const TrimerFilter = () => <SvgCss xml={svg} width='100%' height='100%' />
    return <TrimerFilter/>
}

export default SvgTrimerFilter;