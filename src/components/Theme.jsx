import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import "./theme.css"
import { FaCog } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';

const Theme = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState('hsl(225, 73%, 57%)');
    const [theme, setTheme] = useState("dark-theme");

    const changeColor = (color) => {
        setColor(color);
    };
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color)
    }, [color]);

    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        } else {
            setTheme("dark-theme");
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div>
            <div className={`style__switcher ${showSwitcher ? "show-switcher" : ""}`}>
                <div className="style__switcher-toggler"
                    onClick={() => setShowSwitcher(!showSwitcher)}
                >
                    <FaCog />
                </div>

                <div className="theme__toggler" onClick={toggleTheme}>
                    {
                        theme === "dark-theme" ? <BsMoon /> : <BsSun />
                    }
                </div>
                <h3 className="style__switcher-title">
                    Style Switcher
                </h3>
                <div className="style__switcher-items">
                    {themes.map((theme, index) => {
                        return <ThemeItem key={index} {...theme} changeColor={changeColor} />
                    })}
                </div>
                <div className="style__switcher-close"
                    onClick={() => setShowSwitcher(!showSwitcher)}
                >
                    &times;
                </div>
            </div>
        </div>
    )
}

export default Theme