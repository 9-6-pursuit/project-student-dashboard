import React from "react"
import Studentcard from "./Studentcard"
import Form from "./Form"

const CardContainer =({data, heading}) => {

    return (

        <ul className="container">
            <h2>{heading}</h2>
        </ul>
    )
}