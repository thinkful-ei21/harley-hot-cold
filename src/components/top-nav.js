import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" onClick={e => props.clicked(e.target.className)} href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" onClick={e => props.clicked(e.target.className)} href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

