import React from 'react'
import "./header.scss"
import Layout from "../components/layouts/layout"
import svgPic from "../assets/portsvg.svg"
import Face from "../assets/face.jpeg"


export default function Header() {

    return (

        <div className="header-container">
            <div className="header-left">
                <h1>Hi, I'm Hunter!</h1>
                <span>I'm a Software Developer specialized in front end and back end development and have a passion for developing complex scalable web apps.</span>
            </div>
            <div className="header-right">
                <div className="image-container">
                    <img src={Face} />
                </div>
            </div>
        </div>

    )
}
