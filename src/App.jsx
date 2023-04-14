import React from "react"
import Header from "./components/Header"
import BigScreen from "./components/BigScreen"
import SmallScreen from "./components/SmallScreen"
import data from "./data"

sessionStorage.clear()

function App() {
    const [currentDescription, setCurrentDescription] = React.useState(data[0])
    const [notesData, setNotesData] = React.useState(data)
    const [smallScreen, setSmallScreen] = React.useState(window.innerWidth < 600)
    const [contentsVisible, setContentsVisible] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(true)

    React.useEffect(() => {
        function handleResize() {
            setSmallScreen(window.innerWidth < 600)
        }
    
        window.addEventListener('resize', handleResize)
    
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    function goToContents(){
        setContentsVisible(true)
    }

    function handleClick(id, windowTop = 0){
        if(smallScreen) {
            sessionStorage.setItem("topOffset", JSON.stringify(windowTop))
        }
        
        setCurrentDescription(notesData.filter(entry => entry.id === id)[0])

        setNotesData(prev => {
            return prev.map(entry => {
                return entry.id === id ? {...entry, selected: true} : {...entry, selected: false}
            })
        })
        
        setContentsVisible(false)
    } 

    return (
        <div className={`wrapper ${darkMode ? "dark" : ""}`}>
            <Header 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <main className="main">
                {!smallScreen && <BigScreen
                    notesData={notesData}
                    description={currentDescription}
                    handleClick={handleClick}
                    darkMode={darkMode}
                    smallScreen={smallScreen}
                />}
                {smallScreen && <SmallScreen 
                    notesData={notesData}
                    description={currentDescription}
                    handleClick={handleClick} 
                    darkMode={darkMode}
                    smallScreen={smallScreen}
                    contentsVisible={contentsVisible}
                    goToContents={goToContents}
                />}

            </main>
        </div>
    ) 
}

export default App
