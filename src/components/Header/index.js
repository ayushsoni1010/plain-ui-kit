import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.component.style.css';

export default function Header({headerConfiguration}) {
    let logoData = {
        url: headerConfiguration.logo.imgURL,
        title: headerConfiguration.logo.title,
        route: headerConfiguration.logo.route,
        className: (headerConfiguration.logo.className ? headerConfiguration.logo.className : ''),
        shape: (headerConfiguration.logo.logoShape ? headerConfiguration.logo.logoShape : '')
    };
    let styleConfiguration = {
        backgroundColor: headerConfiguration.themeConfig.backgroundColor,
        shadow: (headerConfiguration.themeConfig.shadow ? 'header-shadow' : 'NO_SHADOW'),
        textColor: headerConfiguration.themeConfig.textColor
    };
    let announcementBarConfiguration = {
        text: headerConfiguration.announcementBar.announcementText,
        textColor: headerConfiguration.announcementBar.textColor,
        backgroundColor: headerConfiguration.announcementBar.backgroundColor
    };
    const [headerOptionsRef] = useState(headerConfiguration.options);
    console.log(logoData);
    console.log(styleConfiguration);
    return (
        <div className="header-container">
            <div className="announcement-bar-wrapper"
                style={{
                    color: announcementBarConfiguration.textColor,
                    backgroundColor: announcementBarConfiguration.backgroundColor,
                    fontWeight: '600',
                    textAlign: 'center',
                    paddingTop: '2px',
                    paddingBottom: '2px'
                }}
            >
                {announcementBarConfiguration.text}
            </div>
            <div className="header-content-wrapper"
                style={{
                    color: styleConfiguration.textColor,
                    backgroundColor: styleConfiguration.backgroundColor,
                    boxShadow: `var(--${styleConfiguration.shadow})`
                }}
            >
                <div className="logo-title-content-wrapper">
                    <React.Fragment>
                        <Link to={logoData.route} style={{
                            textDecoration: 'none'
                        }}>
                            <span style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <img src={logoData.url} alt={logoData.title}
                                    className={`header-logo ` + `header-logo__${logoData.shape}`}
                                />
                                <p className="header-title">{logoData.title}</p>
                            </span>
                        </Link>
                    </React.Fragment>
                </div>
                <div className="header-options-cta-container">
                    {headerOptionsRef.map((option, index) => {
                        if (option.type === 'link') {
                            if (option.route === undefined) {
                                return <p className="header-option__text"
                                    key={index}
                                >{option.name}</p>
                            } else {
                                return (
                                    <Link to={option.route} className="header-option__link"
                                        key={index}
                                    >
                                        <p target="_blank" rel="noreferrer" className="header-option__link">{option.name}</p>                                        
                                    </Link>
                                )
                            }
                        } else if (option.type === 'button') {
                            if (option.route === undefined) {
                                return (
                                    <button
                                        key={index}
                                        style={{ textDecoration: 'none' }}
                                        className={
                                            `header-option__button ${option.buttonVariant}`
                                        }
                                    >
                                        {option.name}
                                    </button>
                                )
                            } else {
                                return (
                                    <Link to={option.route}
                                        style={{ textDecoration: 'none' }}
                                        key={index}
                                    >
                                        <button
                                            className={
                                                `header-option__button ${option.buttonVariant}`
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