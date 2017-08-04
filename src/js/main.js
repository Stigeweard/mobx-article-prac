import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import ArticleStore from "./ArticleStore"
import ArticleList from "./ArticleList"

const app = document.getElementById("app")

ReactDOM.render(<ArticleList store={ArticleStore} />, app)
