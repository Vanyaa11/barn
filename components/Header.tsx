import React from 'react';
import Image from 'next/image';
import BarnLogo from '../public/icons/BarnLogo.svg'
import Ellipse from '../public/icons/Ellipse.svg'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <div className="w-22 h-22">
                    <Image src={BarnLogo} className="logo-image" alt="logo" />
                    </div>
                    
                        <h2 className="logo-txt">MILANO DELIVERY <br/><br/>QUICK FASHION DELIVERY </h2>
                    
                </div>
                <div className="userIcon ">
                    <div className="circle ">
                    <Image src={Ellipse} className="user-icon-box" alt="userIcon" />
                    </div>
                    <div className="login">
                        LOGIN
                    </div>
                </div>
            </div>
            <h1 className="title">
                GODITI UN’ESPERIENZA DI SHOPPING SENZA STRESS CON LA NOSTRA
                EFFICIENTE CONSEGNA IN UN’ORA
            </h1>
        </>
    );
}
