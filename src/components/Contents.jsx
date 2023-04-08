import React from "react"
import SmallScreen from "./SmallScreen"

export default function Contents({notesData, handleClick, darkMode, smallScreen}){
    const [scrollHeight, setScrollHeight] = React.useState(() => JSON.parse(sessionStorage.getItem("scrollPosition")) || 0)
    const [windowTop, setWindowTop] = React.useState(() => JSON.parse(sessionStorage.getItem("topOffset")) || 0)

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
            onClick={() => handleClick(note.id)}
        ><h3>{note.title}</h3></div>
    })

    // big screen

    React.useEffect(() => {
        if(!smallScreen){
            function setScrollPosition(event){
                setScrollHeight(event.target.scrollTop)
            }

            document.getElementById("contents").addEventListener("scroll", setScrollPosition)

            return () => removeEventListener("scroll", setScrollPosition)
        }
    }, [])

    // scrollHeight

    React.useEffect(() => {
        if(!smallScreen){
            document.getElementById("contents").scrollTop = scrollHeight
            sessionStorage.setItem("scrollPosition", JSON.stringify(scrollHeight))
        }
    })

    React.useEffect(() => {
        if(smallScreen){
            function setHeightDown(){
                setWindowTop(window.scrollY)
            }

            window.addEventListener("scroll", setHeightDown)

            return () => window.removeEventListener("scroll", setHeightDown)
        }
    }, [])

    React.useEffect(() => {
        if(smallScreen){
            window.scrollTo({ top: windowTop, behavior: 'instant' })
            sessionStorage.setItem("topOffset", JSON.stringify(windowTop))
        }
    })

    return(
        <div id="contents" className={`contents ${darkMode ? "dark" : ""}`}>
            <h2>Contents</h2>
            {titles}
        </div>
    )
}