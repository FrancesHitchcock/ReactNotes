import React from "react"

export default function Contents({notesData, handleClick, darkMode, smallScreen}){
    const windowTop = JSON.parse(sessionStorage.getItem("topOffset")) || 0
    const elementHeight = document.getElementById("contents") ? document.getElementById("contents").scrollTop : 0

    React.useEffect(() => {
        if(!smallScreen){
            document.getElementById("contents").scrollTop = elementHeight
        }
    }, [notesData])

    React.useEffect(() => {
        if(smallScreen){
            window.scrollTo({ top: windowTop, behavior: 'instant' })
        }
    }, [notesData])


    const titles = notesData.map(note => {
        let titleColour

        if(note.selected && darkMode){
            titleColour = "black"
        }
        else if(note.selected && !darkMode){
            titleColour = "white"
        }
        else if(!note.selected && darkMode){
            titleColour = "white"
        }
        else{
            titleColour = "black"
        }

        const styles={
            color: titleColour,
        }

        return <div
            style={styles} 
            className={`contents-title ${note.selected ? "blue" : ""}`} 
            key={note.id}
            onClick={() => handleClick(note.id, window.scrollY)}
        ><h3>{note.title}</h3></div>
    })

    return(
        <div id="contents" className={`contents ${darkMode ? "dark" : ""}`}>
            <h2>Contents</h2>
            {titles}
        </div>
    )
}