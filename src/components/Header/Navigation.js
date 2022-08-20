import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="icon"></div>
            <ul>
                <li>
                    <NavLink to="/">
                        La Compagnie
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        La Flotte
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        La Direction
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Espace Candidat
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Espace Intranet
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;