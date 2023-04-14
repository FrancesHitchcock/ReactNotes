import React from "react"
import Contents from "./Contents"
import Description from "./Description"
import Split from "react-split"

export default function BigScreen({notesData, description, handleClick, darkMode, smallScreen}){
    return (
        <Split
            key={Math.random()}
            sizes={[30, 70]} 
            direction="horizontal" 
            className="split"
        >
            <Contents 
                notesData={notesData} 
                handleClick={handleClick}
                darkMode={darkMode}
                smallScreen={smallScreen}
            />
            <Description 
                description={description}
                darkMode={darkMode}
                smallScreen={smallScreen}
            />
        </Split>
    )
}