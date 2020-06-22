import React from 'react'
import { SvgXml } from "react-native-svg";


const SvgBookings = (props) =>{

    const svg = `
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 24.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 12.6 13.5" style="enable-background:new 0 0 12.6 13.5;" xml:space="preserve">
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
    <path class="st36" d="M7.5,4.9h0.7c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2H7.5c-0.1,0-0.2,0.1-0.2,0.2
        C7.3,4.8,7.4,4.9,7.5,4.9z"/>
    <path class="st36" d="M4.3,4.9h2.5C7,4.9,7,4.8,7,4.7C7,4.6,7,4.5,6.9,4.5H4.3c-0.1,0-0.2,0.1-0.2,0.2C4.2,4.8,4.3,4.9,4.3,4.9z"/>
    <path class="st36" d="M2.6,4.9h1.1c0.1,0,0.2-0.1,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2H2.6c-0.1,0-0.2,0.1-0.2,0.2
        C2.5,4.8,2.5,4.9,2.6,4.9z"/>
    <path class="st36" d="M6.5,6h-3C3.4,6,3.3,6.1,3.3,6.2s0.1,0.2,0.2,0.2h3c0.1,0,0.2-0.1,0.2-0.2S6.6,6,6.5,6z"/>
    <path class="st36" d="M2.6,6.3h0.3c0.1,0,0.2-0.1,0.2-0.2S3,6,2.9,6H2.6C2.5,6,2.5,6.1,2.5,6.2S2.5,6.3,2.6,6.3z"/>
    <path class="st36" d="M2.6,7.9h2c0.1,0,0.2-0.1,0.2-0.2S4.7,7.6,4.6,7.6h-2c-0.1,0-0.2,0.1-0.2,0.2S2.5,7.9,2.6,7.9z"/>
    <path class="st36" d="M3.4,9H2.6C2.5,9,2.5,9.1,2.5,9.2c0,0.1,0.1,0.2,0.2,0.2h0.8c0.1,0,0.2-0.1,0.2-0.2C3.6,9.1,3.5,9,3.4,9z"/>
    <path class="st36" d="M12.1,4.7L12.1,4.7l-0.6-0.8l0,0c0.2-0.1,0.4-0.1,0.5,0.1l0.2,0.3C12.3,4.3,12.3,4.6,12.1,4.7z M10.5,12.8
        c0,0.2-0.2,0.4-0.4,0.4H0.7c-0.2,0-0.4-0.2-0.4-0.4V1.4C0.3,1.2,0.5,1,0.7,1h3.6c0,0,0,0.1,0,0.2v0.3H2.6c-0.1,0-0.2,0.1-0.2,0.2
        v0.5H1.7c-0.3,0-0.4,0.2-0.4,0.5v8.9c0,0.2,0.2,0.4,0.4,0.4h6c0,0,0,0,0.1,0c0,0,0,0,0,0c0.1,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1-0.1
        l1.4-1.4c0.1-0.1,0.2-0.2,0.2-0.3V6.7l0.9-0.6V12.8z M5.4,0.3c0.5,0,0.8,0.4,0.8,0.8v0.5c0,0.1,0.1,0.2,0.2,0.2h1.7v1H2.8v-1h1.6
        c0.1,0,0.2-0.1,0.2-0.2V1.2C4.6,0.7,5,0.3,5.4,0.3z M10.1,1c0.2,0,0.4,0.2,0.4,0.4v2.7L9.6,4.7V2.6c0-0.3-0.2-0.5-0.5-0.5H8.4V1.6
        c0-0.1-0.1-0.2-0.2-0.2H6.6V1.2c0-0.1,0-0.1,0-0.2H10.1z M5.7,8L5.5,7.7l5.2-3.4L11.2,4l0.2,0.3L5.7,8z M5.8,8.7L4.8,8.8L5.3,8
        l0.2,0.4L5.8,8.7z M9,10.4l-1,1v-0.7c0-0.2,0.2-0.4,0.4-0.4H9z M9.3,10.1H8.4c-0.4,0-0.7,0.3-0.7,0.7v0.9H1.7
        c-0.1,0-0.1-0.1-0.1-0.1V2.6c0-0.1,0-0.1,0.1-0.1h0.8V3c0,0.1,0.1,0.2,0.2,0.2h5.6C8.3,3.1,8.4,3,8.4,3V2.5h0.8c0.1,0,0.1,0,0.1,0.1
        v2.3l-4,2.7c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0L4.4,8.9L4.2,9.1c-0.1,0-0.1,0.2,0,0.2c0,0.1,0.1,0.1,0.2,0l0.2-0.1L6.1,9
        c0,0,0,0,0,0h0h0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l3.1-2V10.1z M6.1,8.6L5.9,8.3l5.7-3.7l0.2,0.3L6.1,8.6z M12.3,3.7
        c-0.2-0.3-0.7-0.4-1-0.2l-0.2,0.1l-0.3,0.2V1.4c0-0.4-0.3-0.7-0.7-0.7H6.5C6.3,0.3,5.9,0,5.4,0C5,0,4.6,0.3,4.4,0.7H0.7
        C0.3,0.7,0,1,0,1.4v11.4c0,0.4,0.3,0.7,0.7,0.7h9.4c0.4,0,0.7-0.3,0.7-0.7V5.9l1.4-1c0.3-0.2,0.4-0.7,0.2-1L12.3,3.7z"/>
    </svg>
    
    `

    const Bookings = () => <SvgXml xml={svg} width='100%' height='100%' fill='#1D194D'/>
    return <Bookings />
}

export default SvgBookings;