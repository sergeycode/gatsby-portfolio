import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, url, imageData }) => (
  <div className="progect">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <a href={url}>View this progect online &rarr;</a>
    </p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
