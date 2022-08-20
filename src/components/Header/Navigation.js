import React from 'react';
import { NavLink } from 'react-router-dom';
import fb from '../../assets/images/fb.svg';
import insta from '../../assets/images/insta.svg';
import yt from '../../assets/images/yt.svg';
import twitch from '../../assets/images/twitch.svg';
import discord from '../../assets/images/discord.svg';

const Navigation = () => {
    return (
        <nav>
            <div className="navicon">
                <li>
                    <img src={fb} alt="facebook" />
                </li>
                <li>
                    <img src={insta} alt="instagram" />
                </li>
                <li>
                    <img src={yt} alt="youtube" />
                </li>
                <li>
                    <img src={twitch} alt="twitch" />
                </li>
                <li>
                    <img src={discord} alt="discord" />
                </li>
            </div>
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