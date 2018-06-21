import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {

    const includeInfo = <header>
                            <TopNav clicked={value => props.clicked(value)}/>
                            <InfoModal clicked={value => props.clicked(value)}/>
                            <h1>HOT or COLD</h1>
                        </header>;
    const noInfo =      <header>
                            <TopNav clicked={value => props.clicked(value)}/>
                            <h1>HOT or COLD</h1>
                        </header>;

    const returnComponent = props.show ? includeInfo : noInfo;

    return (
        returnComponent
    );
};
