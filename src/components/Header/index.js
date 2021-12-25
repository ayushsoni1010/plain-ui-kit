import './header.component.style.css';

export default function Header({headerConfiguration}) {
    let logoData = {
        url: headerConfiguration.logo.imgURL,
        title: headerConfiguration.logo.title,
        route: headerConfiguration.logo.route
    };
    let styleConfiguration = {
        backgroundColor: headerConfiguration.themeConfig.backgroundColor,
        shadow: (headerConfiguration.themeConfig.shadow ? 'header-shadow' : 'NO_SHADOW'),
        textColor: headerConfiguration.themeConfig.textColor
    };
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
                
            </div>
        </div>
    )
}