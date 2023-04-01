import React from "react"
import Contents from "./Contents"
import Description from "./Description"

export default function SmallScreen({notesData, description, handleClick, darkMode, smallScreen, contentsVisible, goToContents}){
    return (
        <div>
            {contentsVisible && <Contents 
                notesData={notesData} 
                handleClick={handleClick}
                darkMode={darkMode}
                smallScreen={smallScreen}
            />}
            {!contentsVisible && <Description 
                description={description}
                darkMode={darkMode}
                smallScreen={smallScreen}
                goToContents={goToContents}
            />}
        </div>
    )
}