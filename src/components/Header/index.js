import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.component.style.css';

export default function Header({headerConfiguration}) {
    let logoData = {
        url: headerConfiguration.logo.imgURL,
        title: headerConfiguration.logo.title,
        route: headerConfiguration.logo.route,
        className: (headerConfiguration.logo.className ? headerConfiguration.logo.className : '')
    };
    let styleConfiguration = {
        backgroundColor: headerConfiguration.themeConfig.backgroundColor,
        shadow: (headerConfiguration.themeConfig.shadow ? 'header-shadow' : 'NO_SHADOW'),
        textColor: headerConfiguration.themeConfig.textColor
    };
    const [headerOptionsRef] = useState(headerConfiguration.options);
    console.log(logoData);
    console.log(styleConfiguration);
    return (
        <div className="header-container">
            <div className="header-content-wrapper"
                style={{
                    color: styleConfiguration.textColor,
                    backgroundColor: styleConfiguration.backgroundColor,
                    boxShadow: `var(--${styleConfiguration.shadow})`
                }}
            >
                <div className="logo-title-content-wrapper">
                    <React.Fragment>
                        <img src={logoData.url} alt={logoData.title}
                            className={`header-logo`}
                        />
                    </React.Fragment>
                </div>
                <div className="header-options-cta-container">
                    {headerOptionsRef.map((option, index) => {
                        if (option.type === 'link') {
                            if (option.route === undefined) {
                                return <p className="header-option__text">{option.name}</p>
                            } else {
                                return (
                                    <Link to={option.route} className="header-option__link">
                                        <a target="_blank" rel="noreferrer" className="header-option__link">{option.name}</a>                                        
                                    </Link>
                                )
                            }
                        } else if (option.type === 'button') {
                            if (option.route === undefined) {
                                return (
                                    <button
                                        className={
                                            `header-option__button ${option.buttonType}`
                                        }
                                    >
                                        {option.name}
                                    </button>
                                )
                            } else {
                                return (
                                    <Link to={option.route}>
                                        <button
                                            className={
                                                `header-option__button ${option.buttonType}`
                                            }
                                        >
                                            {option.name}
                                        </button>
                                    </Link>
                                )
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    )
}