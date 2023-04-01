import React from "react"
import reactLogo from '../assets/react.svg'

export default function Header(props){
    return(
        <header className={`header ${props.darkMode ? "dark" : ""}`}>
            <img src={reactLogo} className="header-logo"/>
           <h1>React Basics Handbook</h1>
           <div 
                className="toggler" 
            >
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </header>
    )
}