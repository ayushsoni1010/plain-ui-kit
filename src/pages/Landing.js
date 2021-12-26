import Button from "../components/Button";
import Input from "../components/Input";

import ReactTooltip from "react-tooltip";

import { CodeBlock, nord } from "react-code-blocks";

import React, { useState } from "react";
import Header from "../components/Header";

export default function Landing() {
  const [headerConfigCodeExecutableRef] = useState({
    logo: {
      imgURL: "https://www.github.com/DesignSystemsOSS.png",
      title: "Plain UI Kit",
      route: "/",
      logoShape: "circle",
    },
    options: [
      { type: "link", name: "Documentation" },
      { type: "link", name: "GitHub" },
      { type: "link", name: "Support Us" },
      { type: "link", name: "Discord" },
      { type: "button", buttonVariant: "button-outline", name: "Login" },
      {
        type: "button",
        buttonVariant: "button-solid",
        name: "Create an Account",
      },
    ],
    themeConfig: {
      backgroundColor: "white",
      shadow: true,
      textColor: "black",
    },
    announcementBar: {
      announcementText:
        "This is an announcement bar, you can change this text, bg-color and text-color",
      textColor: "white",
      backgroundColor: "#7900FF",
    },
  });
  const [headerConfigCodeRef] = useState(
    `import Header from '@components/Header';

const headerConfig = {
    logo: {
        imgURL: 'https://www.github.com/DesignSystemsOSS.png',
        title: 'Plain UI Kit',
        route: '/',
        logoShape: 'circle'
    },
    options: [
        { type: 'link', name: 'Documentation' },
        { type: 'link', name: 'GitHub' },
        { type: 'link', name: 'Support Us' },
        { type: 'link', name: 'Discord' },
        { type: 'button', buttonVariant: 'button-outline', name: 'Login' },
        { type: 'button', buttonVariant: 'button-solid', name: 'Create an Account'}
    ],
    themeConfig: {
        backgroundColor: 'white',
        shadow: true,
        textColor: 'black'
    },
    announcementBar: {
        announcementText: 'This is an announcement bar, you can change this text, bg-color and text-color',
        textColor: 'white',
        backgroundColor: '#7900FF'
    }
}

function App() {
    return (
        <Header headerConfiguration={headerConfig} />
    )
}
`
  );
  return (
    <div className="landing-page">
      <div className="hero-section content-center">
        <h1
          style={{
            fontSize: "46px",
            width: "26ch",
            marginTop: "1.4em",
            fontWeight: "900",
          }}
        >
          Plain UI Kit Documentation
        </h1>
        <div
          style={{
            marginTop: "1em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1.2em",
          }}
        >
          <Button value="Support this Project" />
          <Button
            value="Who's the developer tho?"
            style={{ backgroundColor: "var(--primary-theme-color)" }}
            data-for="developer-tooltip"
            data-tip=""
          />
          <ReactTooltip id="developer-tooltip">
            <div
              className="developer-tooltip__header-wrapper"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img
                src="https://www.github.com/yashsehgal.png"
                alt="yashsehgal"
                className="developer-profile-from-github"
                style={{
                  width: "36px",
                  height: "auto",
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              />
              <span>
                <h4 className="developer-name">Yash Sehgal</h4>
                <p>github/yashsehgal</p>
                <p>yashsehgal.com</p>
              </span>
            </div>
          </ReactTooltip>
        </div>
      </div>
      <div
        className="utility-docs-section content-center"
        style={{ marginTop: "6em" }}
      >
        {/* Header component usage */}
        <div className="header-component-usage-section">
          <h3 className="component-title">Header component</h3>
          <p className="component-description">
            Header component is one of the coolest feature I have made. The
            logic and implementation is inpired from Docusaurus' header and UI
            is from Figma.
          </p>
          <h4 className="component-sub-title">Implementation</h4>
          <div
            className="header-component-container"
            style={{
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "2em",
            }}
          >
            <Header headerConfiguration={headerConfigCodeExecutableRef} />
          </div>
          <span style={{ fontFamily: "Fira Mono, monospace" }}>
            <CodeBlock
              text={headerConfigCodeRef}
              theme={nord}
              language="javascript"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
