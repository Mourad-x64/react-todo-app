import React from "react"
import ReactDOM from "react-dom"
//Main Component
import MainContainer from "./components/MainContainer"
//stylesheet
import "./App.css"

ReactDOM.render(
    <React.StrictMode>
        <MainContainer />
    </React.StrictMode>, 
    document.getElementById("root")
)