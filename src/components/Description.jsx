import React from "react"

export default function Description({description, darkMode, smallScreen, goToContents}){

    React.useEffect(() => {
        if(smallScreen){
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }, [])

    return(
        <div className={`description ${darkMode ? "dark" : ""}`} id="description">
            <h2 className="description-title">{description.title}</h2><button className={`contents-button ${smallScreen ? "block" : "hidden"}`} onClick={goToContents}>View Contents</button>
            <p className="description-text" dangerouslySetInnerHTML={{__html: description.body}} />
        </div>
    )
}
